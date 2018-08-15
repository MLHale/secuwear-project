#!/usr/bin/env python

"""
Usage: pcaps <experiment_id> <handle_type> <handle_path>

Options:
	-h, --help
	-f, --file
	-d. --directory
"""
from docopt import docopt
from pcaps import Pcaps

def main():
	arguments = docopt(__doc__, version='0.0.1')
	pcaps = Pcaps('http://localhost:8000/api/session/', 'secuwear', 'secuwear', 'http://localhost:8000/api/btleevents')
	loginResponse = pcaps.loginPost()
	experiment = pcaps.getExperiment(arguments['<experiment_id>'], loginResponse)
	user_id = experiment['data']['relationships']['owner']['data']['id']
	if experiment['data']['relationships']['runs']['data']:
		run_id = experiment['data']['relationships']['runs']['data'][0]['id']
	else:
		run_id = 1
	if not arguments['<handle_type>'] == 'packet':
		run = pcaps.postRun(loginResponse, user_id, arguments['<experiment_id>'], run_id)
		pcaps.validateInfo(arguments['<handle_type>'],arguments['<handle_path>'], loginResponse, run)
	else:
		pcaps.validatePacket(arguments['<handle_type>'],arguments['<handle_path>'], arguments['<experiment_id>'], user_id, loginResponse, run_id)

if __name__ == '__main__':
	sys.exit(main())