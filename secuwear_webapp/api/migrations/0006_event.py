# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-07 22:05
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_delete_event'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('clocktimedifference', models.CharField(blank=True, max_length=200)),
                ('eventtype', models.CharField(blank=True, max_length=200)),
                ('event', models.CharField(blank=True, max_length=200)),
                ('codereference', models.TextField(blank=True)),
                ('domain', models.CharField(max_length=200)),
                ('run', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name_plural': 'Event',
            },
        ),
    ]
