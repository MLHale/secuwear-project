 # -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib import admin

# Create your models here.

class Temperature(models.Model):
	time = models.DateTimeField(auto_now_add=True)
	celsius = models.CharField(max_length=1000)

	def __self__(self):
		return self.time

	def __unicode__(self):
		return unicode(self.time)

	class Meta:
		verbose_name_plural = "temperature"

	class JSONAPIMeta:
		resource_name = "temperature"

class TemperatureAdmin(admin.ModelAdmin):
	list_display = ('time','celsius')


class Barometer(models.Model):
	time = models.DateTimeField(auto_now_add=True)
	pressure = models.CharField(max_length=200)
	altitude = models.CharField(max_length=200)

	def __self__(self):
		return self.pressure

	def __unicode__(self):
		return self.pressure

	class Meta:
		verbose_name_plural = "barometer"

	class JSONAPIMeta:
		resource_name = "barometer"

class BarometerAdmin(admin.ModelAdmin):
	list_display = ("time", "pressure", "altitude")


class Illuminance(models.Model):
	time = models.DateTimeField(auto_now_add=True)
	illuminance = models.CharField(max_length=200)

	def __self__(self):
		return self.illuminance

	def __unicode__(self):
		return self.illuminance

	class Meta:
		verbose_name_plural = "Illuminance"

	class JSONAPIMeta:
		resource_name = "Illuminance"

class IlluminaceAdmin(admin.ModelAdmin):
	list_display = ("time", "illuminance")

'''
class Event(models.Model):
	created = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)
	clocktimedifference = models.CharField(max_length=200, blank=True)
	eventtype = models.CharField(max_length=200, blank=True)
	event = models.CharField(max_length=200, blank=True)
	codereference = models.TextField(blank=True)
	domain = models.CharField(max_length=200)
	#run = models.CharField(max_length=100)

	def __self__(self):
		return self.eventtype

	def __unicode__(self):
		return self.eventtype

	class Meta:
		verbose_name_plural = "Event"

	class JSONAPIMeta:
		resource_name = "Event"


class EventAdmin(admin.ModelAdmin):
	list_display = ("created", "updated", "clocktimedifference", "event", "eventtype")
'''







