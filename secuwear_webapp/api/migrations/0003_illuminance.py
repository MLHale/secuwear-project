# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-04 01:21
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_barometer'),
    ]

    operations = [
        migrations.CreateModel(
            name='Illuminance',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time', models.DateTimeField(auto_now_add=True)),
                ('illuminance', models.CharField(max_length=200)),
            ],
            options={
                'verbose_name_plural': 'Illuminance',
            },
        ),
    ]
