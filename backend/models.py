from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Book(models.Model):
    meetplace = models.CharField(max_length=100)
    meetdate = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    starttime = models.CharField(max_length=50)
    endtime = models.CharField(max_length=50)
    owner = models.ForeignKey(User, related_name='booking', on_delete=models.CASCADE, null=True)


class Serviceprovider(models.Model):
    fullname = models.CharField(max_length=50)
    owner = models.ForeignKey(User, related_name='serviceProviders', on_delete=models.CASCADE, null=True)
    phone = models.CharField(max_length=50)
    email = models.EmailField(max_length=50, unique=True)
    nin = models.CharField(max_length=50)
    dob =  models.CharField(max_length=50)
    gender =  models.CharField(max_length=50)
    phyadd =  models.CharField(max_length=100)
    yearexp = models.CharField(max_length=50)
    notmidman = models.CharField(max_length=50)
    skillset = models.CharField(max_length=50)
    internet = models.CharField(max_length=50)
    qualification = models.CharField(max_length=50)
    portifolio = models.CharField(max_length=100, blank=True)
    profession = models.CharField(max_length=100)
    ref1name = models.CharField(max_length=50)
    ref1title = models.CharField(max_length=100)
    ref1email = models.EmailField(max_length=50, unique=True)
    ref1phone = models.CharField(max_length=50)
    ref2name = models.CharField(max_length=50)
    ref2title = models.CharField(max_length=100)
    ref2email = models.EmailField(max_length=50, unique=True)
    ref2phone = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    service = models.CharField(max_length=50)
    sunday = models.CharField(max_length=50, blank=True)
    monday = models.CharField(max_length=50, blank=True)
    tuesday = models.CharField(max_length=50, blank=True)
    wednesday = models.CharField(max_length=50, blank=True)
    thursday = models.CharField(max_length=50, blank=True)
    friday = models.CharField(max_length=50, blank=True)
    saturday = models.CharField(max_length=50, blank=True)
    starttime = models.CharField(max_length=50)
    endtime = models.CharField(max_length=50)
    pricevisit = models.CharField(max_length=50, blank=True)
    terms = models.CharField(max_length=50)


# class PersonalInfo(models.Model):
#     fullname = models.CharField(max_length=50)
#     phone = models.CharField(max_length=50)
#     email = models.EmailField(max_length=50, unique=True)
#     password = models.CharField(max_length=50)
#     nin = models.CharField(max_length=50)
#     dob =  models.CharField(max_length=50)
#     gender =  models.CharField(max_length=50)
#     physicaladdress =  models.CharField(max_length=100)


# class Eligibility(models.Model):
#     yearexp = models.CharField(max_length=50)
#     notmidman = models.CharField(max_length=50)
#     skillset = models.CharField(max_length=50)
#     access = models.CharField(max_length=50) 



# class Expertise(models.Model):
#     qualifications = models.CharField(max_length=50)
#     portifolio = models.CharField(max_length=100, blank=True)



# class Referees(models.Model):
#     description = models.CharField(max_length=100)
#     ref1name = models.CharField(max_length=50)
#     ref1email = models.EmailField(max_length=50, unique=True)
#     ref1description = models.CharField(max_length=100)
#     ref1phone = models.IntegerField()
#     ref2name = models.CharField(max_length=50)
#     ref2email = models.EmailField(max_length=50, unique=True)
#     ref2description = models.CharField(max_length=100)
#     ref2phone = models.IntegerField()



# class Service(models.Model):
#     category = models.CharField(max_length=50)
#     service = models.CharField(max_length=50)
#     availability = models.CharField(max_length=50)
#     starttime = models.CharField(max_length=50)
#     endtime = models.CharField(max_length=50)
#     pricehour = models.CharField(max_length=50, blank=True)
#     pricevisit = models.CharField(max_length=50, blank=True)
#     agree = models.CharField(max_length=50)


