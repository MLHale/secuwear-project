# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-07 21:58
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_event'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Event',
        ),
    ]
