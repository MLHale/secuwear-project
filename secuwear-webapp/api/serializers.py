from rest_framework import serializers
from .models import *


class TemperatureSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Temperature
		fields = ('time', 'celsius')

class BarometerSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Barometer
		fields = ('time', 'pressure', 'altitude')

class IlluminanceSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Illuminance
		fields = ('time', 'illuminance')

'''
class EventSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Event
		fields = ('created', 'updated', 'clocktimedifference', 'eventtype', 'event', 'codereference', 'domain', 'run')
'''
