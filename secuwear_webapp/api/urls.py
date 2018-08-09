from django.conf.urls import url, include
from . import views

from rest_framework import routers


router=routers.DefaultRouter(trailing_slash=False)
router.register(r'temperature', views.TemperatureViewSet)
router.register(r'barometer', views.BarometerViewSet)
router.register(r'illuminance', views.IlluminanceViewSet)
#router.register(r'event', views.EventViewSet)

urlpatterns = [
	#url(r'^$',views.home, name='home'),
	url(r'^temperature_list$',views.temperature_list, name='temperature_list'),
	url(r'^temperature_new$', views.temperature_new, name='temperature_new'),
	url(r'^barometer_list$', views.barometer_list, name='barometer_list'),
	url(r'^illuminance_list$', views.illuminance_list, name='illuminance_list'),
	url(r'^api/', include(router.urls)),
	url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]