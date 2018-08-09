# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from .models import *
from .forms import *
from .serializers import *


#import from rest_framework
from rest_framework import viewsets
from rest_framework.permissions import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

import time, datetime

#httplib... pip install httplib2 to use this module
import httplib2
import urllib



#Global URL
URL = "http://10.12.14.145:8000/api/events"
def home(request):
	return render(request, 'base.html', {})



# Create your views here.

#Temperature
class TemperatureViewSet(viewsets.ModelViewSet):
	permission_classes = (AllowAny,)
	queryset = Temperature.objects.all()
	serializer_class = TemperatureSerializer

	'''
		To POST data from MetaWear App
	'''
	

	'''def create(self, request, *args, **kwargs):
		print "Received request:"
		#time = request.POST.get('time')
		celsius = request.POST.get('celsius')
		#print request.outerObject
		#print time
		print celsius
		return Response(status=status.HTTP_204_NO_CONTENT)
	'''
@csrf_exempt
def temperature_list(request):
	'''
	POST to secuwear server start
	'''
	strUrl = URL
	systemTime = time.time()
	systemTimeMS = long(systemTime * 1000) #converting to systemTime to MS
	datatoSecuWear = {'systemTime': systemTimeMS, 'eventtype': "call to api/temperature", 'event':"temperature_list() function triggered", 'codereference':"api/views.py: line 54", 'domain': "WebApp", 'run' :"1" }
	body = urllib.urlencode(datatoSecuWear)
	headers = {'Content-type': 'application/x-www-form-urlencoded'}
	h = httplib2.Http()
	response, content = h.request(strUrl, headers=headers, method="POST", body=body)
	'''
	POST to secuwear server end
	''' 

	data = Temperature.objects.all()
	return render(request, 'temperature_list.html', {'data': data})


@csrf_exempt
def temperature_new(request):
	if request.method == 'POST':
		form = TemperatureForm(request.POST)
		#print form
		
		if form.is_valid():
			temperature = form.save(commit=False)
			celsius = form.cleaned_data['celsius']
			print celsius
			temperature.save()



			return HttpResponseRedirect('/temperature_list')
	else:
		form = TemperatureForm()
		
	return render(request, 'temperature_edit.html', {'form': form})


#Barometer
class BarometerViewSet(viewsets.ModelViewSet):
	permission_classes = (AllowAny,)
	queryset = Barometer.objects.all()
	serializer_class = BarometerSerializer


def barometer_list(request):
	data = Barometer.objects.all()
	'''
	POST to secuwear server start
	'''
	strUrl = URL
	systemTime = time.time()
	systemTimeMS = (systemTime * 1000) #converting to systemTime to MS
	datatoSecuWear = {'systemTime': systemTimeMS, 'eventtype': "call to api/barometer", 'event':"barometer_list() function triggered", 'codereference':"api/views.py: line 98", 'domain': "WebApp", 'run' :"1" }
	body = urllib.urlencode(datatoSecuWear)
	headers = {'Content-type': 'application/x-www-form-urlencoded'}
	h = httplib2.Http()
	response, content = h.request(strUrl, headers=headers, method="POST", body=body)
	'''
	POST to secuwear server end
	'''
	
	return render(request, 'barometer_list.html', {'data': data})


#Illuminance
class IlluminanceViewSet(viewsets.ModelViewSet):
	permission_classes = (AllowAny,)
	queryset = Illuminance.objects.all()
	serializer_class = IlluminanceSerializer

def illuminance_list(request):
	data = Illuminance.objects.all()
	'''
	POST to secuwear server start
	'''
	strUrl = URL
	systemTime = time.time()
	systemTimeMS = (systemTime * 1000) #converting to systemTime to MS
	datatoSecuWear = {'systemTime': systemTimeMS, 'eventtype': "call to api/illuminance", 'event':"illuminance_list() function triggered", 'codereference':"api/views.py: line 122", 'domain': "WebApp", 'run' :"1" }
	body = urllib.urlencode(datatoSecuWear)
	headers = {'Content-type': 'application/x-www-form-urlencoded'}
	h = httplib2.Http()
	response, content = h.request(strUrl, headers=headers, method="POST", body=body)
	'''
	POST to secuwear server end
	'''
	
	return render(request, 'illuminance_list.html', {'data': data})

'''
#For events testing

class EventViewSet(viewsets.ViewSet):
	permission_classes = (AllowAny,)
	queryset = Event.objects.all()
	serializer_class = EventSerializer

	@method_decorator(csrf_exempt)
	#def post(sefl, request, *args, **kwargs): posts the data and here create posts it too
	def create(self, request, *args, **kwargs):
		receivedTime = request.POST.get('clocktimedifference') #unicode

		eventType = request.POST.get('eventtype')
		event = request.POST.get('event')
		codereference = request.POST.get('codereference')
		domain = request.POST.get('domain')
		currentTime = time.time()
		rTime = (float(receivedTime)/1000)
		clocktimedifference = (rTime - currentTime)

		newEvent = Event(clocktimedifference=clocktimedifference, eventtype=eventType, event=event, codereference=codereference, domain=domain)
		newEvent.save()

		return Response(status=status.HTTP_204_NO_CONTENT)
	
'''









   
