#!/usr/bin/env python

try:
	from setuptools import setup
except:
	from distutils.core import setup

dependencies=['docopt', 'termcolor']

setup(
	name='pcaps',
	version='0.0.1',
	description='This file will push data to the backend server',
	url='github.com\secuwear-client',
	author='nadusumilli',
	author_email='nadusumilli@unomaha.edu',
	license='',
	install_requires=dependencies,
	packages=['src'],
	entry_points={
		'console_scripts':[
			'pcaps=src.main:main'
		]
	},
	zip_safe=False
)