# Generated by Django 3.1.3 on 2020-11-23 12:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('meetplace', models.CharField(max_length=100)),
                ('meetdate', models.CharField(max_length=50)),
                ('phone', models.IntegerField()),
                ('starttime', models.CharField(max_length=50)),
                ('endtime', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Serviceprovider',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fullname', models.CharField(max_length=50)),
                ('phone', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=50, unique=True)),
                ('password', models.CharField(max_length=50)),
                ('nin', models.CharField(max_length=50)),
                ('dob', models.CharField(max_length=50)),
                ('gender', models.CharField(max_length=50)),
                ('physicaladdress', models.CharField(max_length=100)),
                ('yearexp', models.CharField(max_length=50)),
                ('notmidman', models.CharField(max_length=50)),
                ('skillset', models.CharField(max_length=50)),
                ('access', models.CharField(max_length=50)),
                ('qualifications', models.CharField(max_length=50)),
                ('portifolio', models.CharField(blank=True, max_length=100)),
                ('description', models.CharField(max_length=100)),
                ('ref1name', models.CharField(max_length=50)),
                ('ref1email', models.EmailField(max_length=50, unique=True)),
                ('ref1description', models.CharField(max_length=100)),
                ('ref1phone', models.IntegerField()),
                ('ref2name', models.CharField(max_length=50)),
                ('ref2email', models.EmailField(max_length=50, unique=True)),
                ('ref2description', models.CharField(max_length=100)),
                ('ref2phone', models.IntegerField()),
                ('category', models.CharField(max_length=50)),
                ('service', models.CharField(max_length=50)),
                ('availability', models.CharField(max_length=50)),
                ('starttime', models.CharField(max_length=50)),
                ('endtime', models.CharField(max_length=50)),
                ('pricehour', models.CharField(blank=True, max_length=50)),
                ('pricevisit', models.CharField(blank=True, max_length=50)),
                ('agree', models.CharField(max_length=50)),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='backend', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
