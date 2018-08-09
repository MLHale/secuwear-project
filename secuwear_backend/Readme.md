## Synopsis

Django backend API that supports SecuWear data collection and integrates with the frontend UI

## Code Example

Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Motivation

A short description of the motivation behind the creation and maintenance of the project. This should explain **why** the project exists.

## Installation


**Install and Configure PostgreSQL**

For PostgreSQL to work with Django:
``` sh
$ sudo apt-get install libpq-dev python-dev
```

Install PostgreSQL like so:
``` sh
$ sudo apt-get install postgresql postgresql-contrib
```

Configure PostgreSQL:
``` sh
$ sudo su - postgres

$ createdb secuwear

$ psql

postgres=# CREATE USER secudbadmin WITH PASSWORD '<insert strong password here>';

postgres=# GRANT ALL PRIVILEGES ON DATABASE secuwear TO secudbadmin;
```


**Create Project Directory**
``` sh
$ cd /var/www/
$ mkdir secuwear
```

**Create Virtual Environment**
``` sh

$ cd secuwear/
$ mkdir secuwear_venv
$ virtualenv secuwear_venv
```
**Enable Virtual Environment**
``` sh
$ source secuwear_venv/bin/activate
```
**Install Python Packages**
``` sh
$ pip install django
$ pip install markdown
$ pip install djangorestframework
$ pip install django-filter
$ pip install djangorestframework-jsonapi
$ pip install psycopg2
```

**Clone Repo**
``` sh
$ cd /var/www/secuwear/
$ git clone https://github.com/MLHale/secuwear-backend.git
```
**Create /var/www/secuwear/secuwear_backend/secuwear_backend/localsettings.py**

``` python
# Set to DEV for debug and other configuration items.  PROD otherwise...
ENVIRONMENT = 'DEV'

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '<insert secret key here>'

#ROOT_URLCONF = 'urls'
ROOT_URLCONF = 'secuwear_backend.urls'
WSGI_APPLICATION = 'secuwear_backend.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',.
        'NAME': 'secuwear',
        'USER': 'secudbadmin',
        'PASSWORD': '<insert password created earlier>',
        'HOST': 'localhost',
        'PORT': '',
    }
}
```


**Run development server**
``` sh
$ python ./manage.py runserver
```
Navigate to http://localhost:8000


**Configure Apache to serve Django**
edit /etc/apache2/sites-available/000-default.conf
```
<VirtualHost *:80>
        ServerName localhost

        ServerAdmin youremail@youremail.edu

        # Available loglevels: trace8, ..., trace1, debug, info, notice, warn,
        # error, crit, alert, emerg.
        # It is also possible to configure the loglevel for particular
        # modules, e.g.
        LogLevel info

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined

        #allow access to static files

        Alias /static/ /var/www/secuwear/secuwear_backend/static/
        <Directory /var/www/secuwear/secuwear_backend/static>
            Options -Indexes
            Require all granted
        </Directory>

        #allow access to wsgi file
        <Directory /var/www/secuwear/secuwear_backend/secuwear_backend>
            <Files wsgi.py>
                Require all granted
            </Files>
        </Directory>

        ServerSignature Off

</VirtualHost>

WSGIScriptAlias / /var/www/secuwear/secuwear_backend/secuwear_backend/wsgi.py
WSGIPythonPath /var/www/secuwear/secuwear_backend/:/var/www/secuwear/secuwear_backend/secuwear_backend/:/var/www/secuwear/secuwear_venv/lib/python2.7/site-packages/
```

**Set permissions**
``` sh
$ cd /var/www/secuwear/
$ sudo chmod 755 -R secuwear_backend/
$ sudo chmod 775 secuwear_backend/
$ sudo chown <insert current user here>:www-data -R secuwear_backend/
```

**Restart Apache**
``` sh
$ sudo service apache2 restart
```

Navigate to http://localhost

## Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.

## License

A short snippet describing the license (MIT, Apache, etc.)
