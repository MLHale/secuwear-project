#!/usr/bin/env python

import pyshark, requests, sys, os, re, pprint, ast, json
from random import randint
import datetime

"""Pcaps Object"""
class Pcaps:

	#This is the constructor for the Pcaps class.
	def __init__(self, loginUrl, username, password, btleUrl):
		# This is to make sure that user enters the appropriate information to parse the file.
		self.pp = pprint.PrettyPrinter(indent=4)

		# compiling a regex to ignore some files that are not required.
		self.regexPath = re.compile('.*\.docx|.*\.DS_Store')

		# Creating the url links for the django server to create requests!.
		# Under the URLS we also entered the information for the secuwear user login.
		self.loginUrl = loginUrl
		self.btleUrl = btleUrl
		self.username = username
		self.password = password
		# Requesting the session so that i can use the session object!.
		self.client = requests.session()
		# # Here we are preparing the data which is required for logging in to secuwear and sending a post request to the django server to login!
		# loginData = dict(username=self.username, password=self.password, next='/')
		# self.loginResponse = self.client.post(self.loginUrl, data=loginData, headers=dict(Referer=self.loginUrl))

	#This method uses the username and password and the url to login to the website and get the response back.
	def loginPost(self):
		loginData = dict(username=self.username, password=self.password, next='/')
		return self.client.post(self.loginUrl, data=loginData, headers=dict(Referer=self.loginUrl))

	#This is a method to get an experiment with the id from the api.
	def getExperiment(self, experiment_id, loginResponse):
		experimentUrl='http://localhost:8000/api/experiments/'+str(experiment_id)
		return self.client.get(experimentUrl, cookies=loginResponse.cookies).json()

	#This is a method to post a new Run to the api.
	def postRun(self, loginResponse, user_id, experiment_id, run_id):
		runUrl='http://localhost:8000/api/runs'
		experimentUrl='http://localhost:8000/api/experiments/'+str(experiment_id)
		ownerUrl='http://localhost:8000/api/users/'+str(user_id)
		#Send the urls to the experiments and owners for the relationships.
		name = raw_input('Please enter a name for the new Run: ')
		description = raw_input('Please enter a description for the new Run: ')
		runData=dict(owner=ownerUrl, experiment=experimentUrl, name=name, description=description)
		return self.client.post(runUrl, data=runData, cookies=loginResponse.cookies, headers=dict(Referer=self.btleUrl)).json()
 		
 	# This function sends a request to the database with the data from the packets of the file.
	def postData(self, walkFile, loginResponse, run_id):
	    i=1
	    wearablecounter = 0
	    loopCounter = 1
	    mobileFunctionCounter = 0
	    handlenumber = 2
	    handlenumberData = ''
	    secondsTime = 10
	    run = 'http://localhost:8000/api/runs/'+str(run_id['data']['id'])
	    print 'Capturing Information from ' + os.path.abspath(walkFile)
	    # Using try except just in case there are any attribute errors while parsing the data.
	    try:
	        # Here we are using the pyshark plugin to parse each packet and get the information.
	        cap = pyshark.FileCapture(os.path.abspath(walkFile), display_filter='btle')

	        # The loop below goes through an array of the packets that are captured. Then inside the loop we are gathering the information required for analysis and sending a post request to the django server.
	        for pkt in cap:
	            arrivalTime = '2017-06-15T09:26:'+str(secondsTime)+'.389643Z'
	            # Preparing the btle data that we can send to the django server.
	            if i == 1:
	                webappData = 'request from 192.168.'+str(randint(0, 9))+'.1'+str(randint(1, 9))+str(randint(1, 9))+' for /api/events/'+str(loopCounter)
	                btle_data = dict( run=run, arrivaltime=arrivalTime, caplength=pkt.captured_length, domain='webapp', layers=pkt.layers, highestlayer=pkt.highest_layer, epochtime=pkt.sniff_timestamp, advertisingaddress=pkt.btle.access_address, advertisingheader=pkt.btle.advertising_header, crc=pkt.btle.crc, btledata=webappData, ppiflags=pkt.ppi.flags, ppiversion=pkt.ppi.version, ppidlt=pkt.ppi.dlt, ppiheaderlength=pkt.ppi.length, ppireserved=pkt.ppi.reserved, accessaddress='asdf'  , next='/')
	                i += 1
	            elif i == 2:
	                if mobileFunctionCounter == 5:
	                    mobileFunctionCounter = 0
	                mobileFunctions = ['accelerometer','tempreture','orientation','heartrate','devices']
	                mobileData = 'function '+mobileFunctions[mobileFunctionCounter]+' handler executed: line'+str(loopCounter)
	                mobileFunctionCounter+=1
	                # print('This is mobile data: '+ mobileData)
	                btle_data = dict( run=run, arrivaltime=arrivalTime, caplength=pkt.captured_length, domain='mobile', layers=pkt.layers, highestlayer=pkt.highest_layer, epochtime=pkt.sniff_timestamp, advertisingaddress=pkt.btle.access_address, advertisingheader=pkt.btle.advertising_header, crc=pkt.btle.crc, btledata=mobileData, ppiflags=pkt.ppi.flags, ppiversion=pkt.ppi.version, ppidlt=pkt.ppi.dlt, ppiheaderlength=pkt.ppi.length, ppireserved=pkt.ppi.reserved, accessaddress='asdf'  , next='/')
	                i += 1
	            elif i == 3:
	                secondsTime += 1
	                if secondsTime > 60:
	                    secondsTime = 10
	                wearablecounter+=1
	                if wearablecounter < 11:
	                    wearableData = 'ADV_IND packet'
	                elif (wearablecounter > 10 and wearablecounter < 15):
	                    wearableData = 'CONNECT packet'
	                elif wearableData == handlenumberData:
	                    wearableData = 'OP Write (handle '+str(handlenumber)+')'
	                else:
	                    handlenumberData = 'OP Read (handle '+str(handlenumber)+')'
	                    wearableData = handlenumberData
	                #print('This is the wearable data: '+wearableData)
	                btle_data = dict( run=run, arrivaltime=arrivalTime, caplength=pkt.captured_length, domain='wearable', layers=pkt.layers, highestlayer=pkt.highest_layer, epochtime=pkt.sniff_timestamp, advertisingaddress=pkt.btle.access_address, advertisingheader=pkt.btle.advertising_header, crc=pkt.btle.crc, btledata=wearableData, ppiflags=pkt.ppi.flags, ppiversion=pkt.ppi.version, ppidlt=pkt.ppi.dlt, ppiheaderlength=pkt.ppi.length, ppireserved=pkt.ppi.reserved, accessaddress='asdf'  , next='/')
	                i = 1

	            # Sending the request to the django server using the python requests.
	            btlePostResponse = self.client.post(self.btleUrl, data=btle_data, cookies=loginResponse.cookies, headers=dict(Referer=self.btleUrl))
	            loopCounter+=1
	            handlenumber = randint(1, 6)
	    except AttributeError:
	        print "Some Part of the packet data could not be parsed!"
	    print 'Your request has recieved a status code of: '+str(btlePostResponse.status_code)
	    # response = ast.literal_eval(btlePostResponse.text)
	    # print(response['data']['result']+'\n')
	
	#This function is used to check which type of handle the plugin is dealing with.
	def validateInfo(self, handle_type, handle_path, loginResponse, run_id):
		# This is how we import the files to read them into the django server!.
		# The if statement is to differentiate between file and a folder to parse a file.
		if handle_type == 'directory':
		    walkDirectory = handle_path
		    print '\nLocation of the directory to be parsed (absolute): ' + os.path.abspath(walkDirectory)
		    print '\n                                Beginning to Capture data to the Database!'
		    for root, dirs, files in os.walk(walkDirectory):
		        print '='*115
		        for name in files:
		            m = self.regexPath.match(name)
		            if not m:
		                self.postData(os.path.join(root, name), loginResponse, run_id)

		elif handle_type == 'file':
		    walkFile = handle_path
		    print '\nLocation of the file to be parsed (absolute): ' + os.path.abspath(walkFile)
		    print '\n                                Beginning to Capture data to the Database!'
		    print '='*115
		    self.postData(os.path.abspath(walkFile), loginResponse, run_id)

	def validatePacket(self, handle_type, handle_path, experiment_id, user_id, loginResponse, run_id):
		advertisingheader='' 
		channelindex = '' 
		btletype = '' 
		advertisingaddress = '' 
		advertisingdata ='' 
		advertisingtype = '' 
		Company = '' 
		companydata = '' 
		btledata = '' 
		crc = ''
		arrivaltime = ''
		run = 'http://localhost:8000/api/runs/'+str(run_id)
		p = re.compile('(.*)\s+.*:\s+(\S+)\s+.*:\s+(\S+)\s+\S+:\s+(.*)\s+.*:\s+(.*)\s+(.*)\s+\S+\s+(.*)\s+\S+\s+(.*)\s+\S+\s+(.*)\s+\S+\s+(.*)')
		m = p.findall(handle_path)
		for row in m:
			# print row
			advertisingheader = row[0]
			channelindex = row[1]
			btletype = row[2]
			advertisingaddress = row[3]
			advertisingdata = row[4]
			advertisingtype = row[5]
			company = row[6]
			companydata = row[7]
			btledata = row[8]
			crc = row[9]
			arrivaltime = datetime.datetime.now()
			btle_data = dict( run=run, arrivaltime=arrivaltime, advertisingheader=advertisingheader, channelindex=channelindex, btletype=btletype, advertisingaddress=advertisingaddress, advertisingdata=advertisingdata, advertisingtype=advertisingtype, company=company, companydata=companydata, btledata=btledata, crc=crc, domain='wearable')
			btlePostResponse = self.client.post(self.btleUrl, data=btle_data, cookies=loginResponse.cookies, headers=dict(Referer=self.btleUrl))
			btle_data = ''
			btlePostResponse = ''






