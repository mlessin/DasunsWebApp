# Generated by Django 3.1.3 on 2021-01-07 11:28

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
            name='Serviceprovider',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fullname', models.CharField(max_length=50)),
                ('phone', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=50, unique=True)),
                ('nin', models.CharField(max_length=50)),
                ('dob', models.CharField(max_length=50)),
                ('gender', models.CharField(max_length=50)),
                ('phyadd', models.CharField(max_length=100)),
                ('yearexp', models.CharField(max_length=50)),
                ('notmidman', models.CharField(max_length=50)),
                ('skillset', models.CharField(max_length=50)),
                ('internet', models.CharField(max_length=50)),
                ('qualification', models.CharField(max_length=50)),
                ('portifolio', models.CharField(blank=True, max_length=100)),
                ('profession', models.CharField(max_length=100)),
                ('ref1name', models.CharField(max_length=50)),
                ('ref1title', models.CharField(max_length=100)),
                ('ref1email', models.EmailField(max_length=50, unique=True)),
                ('ref1phone', models.CharField(max_length=50)),
                ('ref2name', models.CharField(max_length=50)),
                ('ref2title', models.CharField(max_length=100)),
                ('ref2email', models.EmailField(max_length=50, unique=True)),
                ('ref2phone', models.CharField(max_length=50)),
                ('category', models.CharField(max_length=50)),
                ('service', models.CharField(max_length=50)),
                ('sunday', models.CharField(blank=True, max_length=50)),
                ('monday', models.CharField(blank=True, max_length=50)),
                ('tuesday', models.CharField(blank=True, max_length=50)),
                ('wednesday', models.CharField(blank=True, max_length=50)),
                ('thursday', models.CharField(blank=True, max_length=50)),
                ('friday', models.CharField(blank=True, max_length=50)),
                ('saturday', models.CharField(blank=True, max_length=50)),
                ('starttime', models.CharField(max_length=50)),
                ('endtime', models.CharField(max_length=50)),
                ('pricevisit', models.CharField(blank=True, max_length=50)),
                ('terms', models.CharField(max_length=50)),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='serviceProviders', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('meetplace', models.CharField(max_length=100)),
                ('meetdate', models.CharField(max_length=50)),
                ('phone', models.CharField(max_length=50)),
                ('starttime', models.CharField(max_length=50)),
                ('endtime', models.CharField(max_length=50)),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='booking', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
