# Generated by Django 3.1.3 on 2021-01-12 12:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='serviceprovider',
            name='qualification',
            field=models.FileField(upload_to=''),
        ),
    ]
