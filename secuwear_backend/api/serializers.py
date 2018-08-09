from django.contrib.auth.models import User, Group
from rest_framework import serializers
from rest_framework_json_api.relations import *


#load django and webapp models
#from django.contrib.auth.models import *
from api.models import *


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'url', 'username', 'email', 'groups', 'experiments', 'password')
        #fields = ('url', 'username', 'email', 'groups', 'experiments')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class EventSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Event
        fields = ('created', 'updated', 'clocktimedifference', 'eventtype', 'event','data', 'codereference','size', 'domain','domainVal', 'run')


class RunSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Run
        fields = ('created', 'updated', 'owner', 'name', 'description', 'experiment', 'events', 'btleevents')


class ExperimentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Experiment
        fields = ('created', 'updated', 'owner', 'name', 'description', 'runs')

class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    #fields = '__all__'
    owner = UserSerializer(read_only=True)
    class Meta:
        model = Profile
        fields = (  'owner', 'roles', 'gender', 'age', 'educationlevel', 'city','ip','state')


#class BtleEventSerializer(serializers.HyperlinkedModelSerializer):
    # run = RunSerializer(read_only=True)
    #class Meta:
        #model = BtleEvent
        #fields = ('run', 'arrivaltime', 'btletype', 'advertisingaddress', 'advertisingheader', 'crc', 'btledata', 'channelindex', 'advertisingdata', 'advertisingtype', 'company', 'companydata', 'domain')

#class AndroidEventSerializer(serializers.HyperlinkedModelSerializer):
    #class Meta:
        #model = AndroidEvent
        #fields = ('arrivaltime', 'fragment', 'setup', 'boardReady', 'request', 'response')