# Generated by Django 3.1.3 on 2021-01-14 16:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_auto_20210112_1509'),
    ]

    operations = [
        migrations.AlterField(
            model_name='serviceprovider',
            name='internet',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='serviceprovider',
            name='notmidman',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='serviceprovider',
            name='skillset',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='serviceprovider',
            name='yearexp',
            field=models.CharField(blank=True, max_length=50),
        ),
    ]
