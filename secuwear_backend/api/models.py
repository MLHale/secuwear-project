from __future__ import unicode_literals

from django.db import models
from django.core.validators import *

from django.contrib.auth.models import User, Group

from django.contrib import admin
import base64

# Create your models here.
class Experiment(models.Model):
    """
    This is a Experiment record for storing Experiment information.
    """
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=1024, blank=True) #, validators=[validate_no_xss, validate_no_html])
    description = models.TextField(blank=True) #, validators=[validate_no_xss, validate_no_html])

    #users foriegn key
    #if a Experiment model has a User that is, a User contains multiple Experiments but each Experiment only has one User use the following definitions:
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='experiments')

    #patterns

    def __str__(self):
        return str(self.name)

    class Meta:
        #This will be used by the admin interface
        verbose_name_plural = "experiments"

    class JSONAPIMeta:
        resource_name = "experiments"

class ExperimentAdmin(admin.ModelAdmin):
    #This inner class indicates to the admin interface how to display a post
    #See the Django documentation for more information
    list_display = ('created', 'updated', 'name', 'description', 'owner')


class Run(models.Model):
    """
    This is a Run record for storing Run information.
    """
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=1024, blank=True) #, validators=[validate_no_xss, validate_no_html])
    description = models.TextField(blank=True) #, validators=[validate_no_xss, validate_no_html])

	#experiment (fk)
	#if a Run model has a Experiment that is, an Experiment contains multiple Runs but each Run only has one Experiment use the following definitions:
    experiment = models.ForeignKey(Experiment, on_delete=models.CASCADE, related_name='runs')
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='runs')

    def __str__(self):
        return str(self.name)

    class Meta:
        #This will be used by the admin interface
        verbose_name_plural = "runs"

class RunAdmin(admin.ModelAdmin):
    #This inner class indicates to the admin interface how to display a post
    #See the Django documentation for more information
    list_display = ('created', 'updated', 'owner', 'name', 'description', 'experiment')


class BtleEvent(models.Model):
    '''
        This is frame/ppi/btle data from pcaps
    '''
    arrivaltime = models.DateTimeField(auto_now_add=True)
    #btle
    btletype = models.CharField(max_length=200)
    channelindex = models.CharField(max_length=200, null=True)
    advertisingheader = models.CharField(max_length=200)
    advertisingaddress = models.CharField(max_length=300)
    advertisingdata = models.CharField(max_length=200)
    advertisingtype = models.CharField(max_length=200)
    company = models.CharField(max_length=200, null=True)
    companydata = models.CharField(max_length=300, null=True)
    btledata = models.CharField(max_length=300, null=True)
    crc = models.CharField(max_length=200)
    domain = models.CharField(max_length=1024, blank=True) #, validators=[validate_no_xss, validate_no_html])

    # run (fk)
    # If the btle event has a run that is, a run contains multiple btle events but each btle event has only one run use the following defenitions:
    #run = models.ForeignKey(Run, on_delete=models.CASCADE, related_name='btleevents')
    run = models.CharField(max_length=100, blank=True) #Set CharField for testing purpose


    def __str__(self):
        return str(self.arrivaltime)

    class Meta:
        #This will be used by the admin interface
        verbose_name_plural = "btleevents"
        ordering = ('arrivaltime',)

    class JSONAPIMeta:
        resource_name = "btleevents"
    

class BtleEventAdmin(admin.ModelAdmin):
    #This inner class indicates to the admin interface how to display a post
    #See the Django documentation for more information
    list_display = ('id','run', 'arrivaltime', 'btletype', 'advertisingaddress', 'advertisingheader', 'crc', 'btledata', 'channelindex', 'advertisingdata', 'advertisingtype', 'company', 'companydata', 'domain' )


class Event(models.Model):
    """
    This is a Event record for storing Event information.
    """
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    clocktimedifference = models.CharField(max_length=200, blank=True) #DecimalField(null=True, blank=True, max_digits=None, decimal_places=None)
    eventtype = models.CharField(max_length=1024, blank=True) #, validators=[validate_no_xss, validate_no_html])
    event = models.TextField(blank=True) #, validators=[validate_no_xss, validate_no_html])
    data = models.TextField(blank=True)
    codereference = models.TextField(blank=True) #, validators=[validate_no_xss, validate_no_html])
    size = models.CharField(max_length=256, blank=True)
    domain = models.CharField(max_length=1024, blank=True) #, validators=[validate_no_xss, validate_no_html])
    domainVal = models.CharField(max_length=10, blank=True)
     
    #runid(fk)
    #if an Event model has a Run that is, a Run contains multiple Events but each Event only has one Run use the following definitions:
    #run = models.ForeignKey(Run, on_delete=models.CASCADE, related_name='events')
    run = models.CharField(max_length=100, blank=True) #Set CharField for testing purpose
    
    def __str__(self):
        return str(self.eventtype) + "_" + str(self.domain)

    class Meta:
        #This will be used by the admin interface
        verbose_name_plural = "events"

    class JSONAPIMeta:
        resource_name = "events"

class EventAdmin(admin.ModelAdmin):
    #This inner class indicates to the admin interface how to display a post
    #See the Django documentation for more information
    list_display = ('created', 'updated', 'run', 'clocktimedifference', 'eventtype', 'event', 'data', 'codereference', 'size', 'domain', 'domainVal')


class Profile(models.Model):
    '''
        This is a profile record for storing the users profile information.
    '''
    roles = models.CharField(max_length=200, blank=False, default="{\"admin\": false, \"researcher\": false, \"subject\": true}")
    gender = models.CharField(max_length=100, blank=False)
    age = models.IntegerField(blank=False)
    educationlevel = models.CharField(max_length=200, blank=False)
    city = models.CharField(max_length=200, blank=False)
    state = models.CharField(max_length=200, blank=False)
    ip = models.CharField(max_length=200, blank=False)

    # user (fk)
    # This line defines the relatinoship between the user and the profile.
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user')
    
    def __str__(self):
        return self.user.username

    class JSONAPIMeta:
        resource_name = "profiles"

class ProfileAdmin(admin.ModelAdmin):
    list_display = ('user',)

class AndroidEvent(models.Model):
    arrivaltime = models.DateTimeField(auto_now_add=True)
    fragment = models.CharField(max_length=500) #give general names change fragments into codefile, AndroidEvent into AppEvent
    setup = models.TextField(blank=True)
    boardReady = models.CharField(max_length=500)
    request = models.TextField(blank=True)
    response = models.TextField(blank=True)

    #run = models.ForeignKey(Run, on_delete=models.CASCADE, related_name='androidevents')

    def __str__(self):
        return str(self.arrivaltime)

    class JSONAPIMeta:
        resource_name = "androidevents"

class AndroidEventAdmin(admin.ModelAdmin):
    list_display = ('arrivaltime', 'fragment')

