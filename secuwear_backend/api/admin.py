from django.contrib import admin

#if ENVIRONMENT == 'PROD':
#	from api.models import *
#else:
from api.models import *

# Register your models here.
admin.site.register(Experiment, ExperimentAdmin)
admin.site.register(Run, RunAdmin)
admin.site.register(Event, EventAdmin)
admin.site.register(Profile, ProfileAdmin)
#admin.site.register(BtleEvent, BtleEventAdmin)
#admin.site.register(AndroidEvent, AndroidEventAdmin)