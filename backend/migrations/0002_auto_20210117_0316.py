# Generated by Django 3.1 on 2021-01-17 00:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='serviceprovider',
            name='qualification',
            field=models.CharField(blank=True, max_length=50),
        ),
    ]