# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-01-12 19:53
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20171208_0454'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='run',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='events', to='api.Run'),
        ),
    ]