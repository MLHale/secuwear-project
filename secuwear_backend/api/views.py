#from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import *
from django.contrib.auth import *
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from api.serializers import *
#from django.shortcuts import render_to_response
from django.template import RequestContext
from django_filters.rest_framework import DjangoFilterBackend

#Import time
import time, datetime


from django.shortcuts import *

# Import models
from django.db import models
from django.contrib.auth.models import *
from api.models import *


#REST API
from rest_framework import viewsets, filters
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.contrib.auth import authenticate, login, logout
from rest_framework.permissions import *
from rest_framework.decorators import *
from rest_framework.authentication import *
import os, pyshark

#filters
#from filters.mixins import *
from api.serializers import *
from api.pagination import *
from pprint import PrettyPrinter


def home(request):
   """
   Send requests to / to the ember.js clientside app
   """
   return render_to_response('index.html',
               {}, RequestContext(request))

# This is the Group view set.
class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

# This is a Event view set for handling request.
class EventViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    permission_classes = (AllowAny,)
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('run',)


    def get(self, request, format=None):
        snippets = Event.objects.all()
        serializer = EventSerializer(snippets, many=True)
        return Response(serializer.data)

    @method_decorator(csrf_exempt)
    def create(self, request, *args, **kwargs): #change create to post after testing
        
        sendTime = request.POST.get('systemTime') #Time request occurred in App
        eventType = request.POST.get('eventtype')
        event = request.POST.get('event')
        data = request.POST.get('data')
        codereference = request.POST.get('codereference')
        size = request.POST.get('size')
        domain = request.POST.get('domain')
        currentTime = time.time() #gives current system time in seconds
        currentTimeMS = currentTime * 1000 #converting time to ms
        run = 59
        

        sTime = long(sendTime) 
        cTime = long(currentTimeMS)

        print "Received time= "+str(sendTime)
        print "System time= "+str(cTime)

        timeDiff =  abs(cTime - sTime)
        print "Difference = "+str(timeDiff)

        if (domain == "bluetooth"):
            domainVal = 0
        elif (domain == "Mobile"):
            domainVal = 1
        elif (domain == "Web"):
            domainVal = 2
        else:
            domainVal = NULL
   
        newEvent = Event(clocktimedifference=timeDiff, eventtype=eventType, event=event, codereference=codereference, data=data, size=size ,domain=domain, domainVal=domainVal, run=run)
        newEvent.save()

        return Response(status=status.HTTP_204_NO_CONTENT)

# This is a Run view set for handling request.
class RunViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Run.objects.all()
    serializer_class = RunSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('events',)

# This is a Experiment view set for handling request.
class ExperimentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Experiment.objects.all()
    serializer_class = ExperimentSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('owner',)

# This is a User view set for handling request.
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed.
    """
    resource_name = 'users'
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

# This is a Profile view set for handling request.
class ProfileViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed.
    """
    resource_name = 'profiles'
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

# This is a Btle Event view set for handling request.
'''
class BtleEventViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Btle to be viewed.
    """
    #permission_classes = (AllowAny,)
    resource_name = 'btleevents'
    queryset = BtleEvent.objects.all()
    serializer_class = BtleEventSerializer
    filter_backends = (DjangoFilterBackend,)
    Sfilter_fields = ('run',)

# This is a Btle Event view set for handling request.
class AndroidEventViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Btle to be viewed.
    """
    permission_classes = (AllowAny,)
    resource_name = 'androidevent'
    queryset = AndroidEvent.objects.all()
    serializer_class = AndroidEventSerializer
    #filter_backends = (DjangoFilterBackend,)
    #filter_fields = ('run',)

    
    #def create (self, request, *args, **kwargs):
        #print request.data
        #return Response(status=status.HTTP_204_NO_CONTENT)
    '''

# This is a Session view set for handling request.
class Session(APIView):
    permission_classes = (AllowAny,)
    def form_response(self, isauthenticated, userid, username, error=""):
        data = {
            'isauthenticated': isauthenticated,
            'userid': userid,
            'username': username
        }
        if error:
            data['message'] = error

        return Response(data)

    def get(self, request, *args, **kwargs):
        # Get the current user
        if request.user.is_authenticated():
            return self.form_response(True, request.user.id, request.user.username)
        return self.form_response(False, None, None)

    def post(self, request, *args, **kwargs):
        # Login
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return self.form_response(True, user.id, user.username)
            return self.form_response(False, None, None, "Account is suspended")
        return self.form_response(False, None, None, "Invalid username or password")

    def delete(self, request, *args, **kwargs):
        # Logout
        logout(request)
        return Response(status=status.HTTP_204_NO_CONTENT)
        
# This is a Register view set for handling request.
class Register(APIView):
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        # Login
        username = request.POST.get('username') #you need to apply validators to these
        print username
        password = request.POST.get('password') #you need to apply validators to these
        email = request.POST.get('email') #you need to apply validators to these
        gender = request.POST.get('gender') #you need to apply validators to these
        age = request.POST.get('age') #you need to apply validators to these
        educationlevel = request.POST.get('educationlevel') #you need to apply validators to these
        city = request.POST.get('city') #you need to apply validators to these
        state = request.POST.get('state') #you need to apply validators to these

        print request.POST.get('username')
        if User.objects.filter(username=username).exists():
            return Response({'username': 'Username is taken.', 'status': 'error'})
        elif User.objects.filter(email=email).exists():
            return Response({'email': 'Email is taken.', 'status': 'error'})

        #especially before you pass them in here
        newuser = User.objects.create_user(email=email, username=username, password=password)
        newprofile = Profile(user=newuser, gender=gender, age=age, educationlevel=educationlevel, city=city, state=state)
        newprofile.save()

        return Response({'status': 'success', 'userid': newuser.id, 'profile': newprofile.id})
