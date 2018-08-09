from django import forms

from .models import *

class TemperatureForm(forms.ModelForm):

	class Meta:
		model = Temperature
		fields = ('celsius',)