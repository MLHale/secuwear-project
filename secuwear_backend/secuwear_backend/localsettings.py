# Set to DEV for debug and other configuration items.  PROD otherwise...
ENVIRONMENT = 'DEV'

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '<insert secret key here>'

#ROOT_URLCONF = 'urls'
ROOT_URLCONF = 'secuwear_backend.urls'
WSGI_APPLICATION = 'secuwear_backend.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'secuwear',
        'USER': 'secudbadmin',
        'PASSWORD': 'secuwear',
        'HOST': 'localhost',
        'PORT': '',
    }
}
