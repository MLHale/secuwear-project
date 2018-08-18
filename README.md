# secuwear-project
Overall repo containing all Secuwear-related documentation and code repositories (as submodules).

# Includes
1. secuwear_backend
2. secuwear_webapp
3. secuwear-androidapp
4. secuwear-attacker-webapp
5. secuwear-client-ubertooth
6. libtbb
7. ubertooth

# Instructions to use the project

Clone the complete repo - git clone https://github.com/MLHale/secuwear-project and follow the instructions below

## 1. To run secuwear_backend

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

**Install Python Packages**
``` sh
$ pip install django
$ pip install markdown
$ pip install djangorestframework
$ pip install django-filter
$ pip install djangorestframework-jsonapi
$ pip install psycopg2
$ pip install httplib2
$ pip install pyshark==0.3.8 (specific for Python 2.7)
```

**Inside secuwear_backend/secuwear_backend/localsettings.py**

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
$ cd secuwear_backend
$ python ./manage.py runserver 0:8000
```
Navigate to http://localhost:8000

## 2. To run secuwear_webapp

Open another terminal and follow the instructions below (Assumed that you have already installed Python Packages as mentioned above)
- Note: the **URL** variable in **views.py** should contain the address/URL of secuwear_backend's api/events

``` sh
$cd secuwear_webapp
$ python manage.py runserver 0:4000
```

## 3. To run secuwear-androidapp

- Open secuwear-android app project with Android studio
- Build and run it in an Android device
- Note: the **myWebView.loadUrl()** inside TemperatureFragment class should contain the address of secuwear-attacker-webapp
- Note: the **strURL** variable in AppHook class should contain the address/URL of secuwear_backend's api/events 

## 4. To run secuwear-attacker-webapp

- Download and install XAMPP (for any OS)
- Open XAMPP and launch Apache server and MySQL database
- Open http://localhost/phpmyadmin in a browser
- Create new Databse **metaweardb**  with username root and default password
- Create new table **tbl_data** with **columns: id, time, temperature**
- Copy the secuwear-attacker-webapp folder into htdocs folder of XAMPP
- Add the MySQL database connection inside the project i.e. index.php file

``` sh
$servername = "localhost";
$username = "root";
$password = "your db password";
$dbname = "metaweardb";
```
- Note: the **maliciousURL** inside index.php should match the URL of secuwear-attacker-webapp container

## 5. ubertooth, libbtbb, secuwear-client-ubertooth

### libbtbb
- Run the following commands to install libbtbb
```sh
cd libbtbb
mkdir build
cd build
cmake ..
make
sudo make install
```
### ubertooth
- Run the following commands to install ubertooth
``` sh
cd ubertooth/host
mkdir build
cd build
cmake ..
make
sudo make install
```

### secuwear-client-ubertooth
- Run the following commands to install secuwear-client-ubertooth

``` sh
$cd secuwear-client-ubertooth
$sudo python setup.py develop
```

After installation
- insert Ubertooth device into the usb port
- begin bluetooth capture using the following code:
``` sh
$ubertooth-btle -f -c /path/pipeName
```


