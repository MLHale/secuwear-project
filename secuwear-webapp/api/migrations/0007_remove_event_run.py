# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-07 23:15
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_event'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='run',
        ),
    ]