# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2018-04-05 21:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_event_size'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='data',
            field=models.TextField(blank=True),
        ),
    ]
