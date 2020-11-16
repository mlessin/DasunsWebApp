from django.db import models

# Create your models here.
class Book(models.Model):
    meetplace = models.CharField(max_length=20)
    meetdate = models.DateTimeField(auto_now_add=true)
    phone = models.AutoField(max_length=10)
    starttime = models.DateTimeField(auto_now_add=true)
    endtime = models.DateTimeField(auto_now_add=true)



class PersonalInfo(models.Model):
    fullname = models.CharField(max_length=25)
    phone = models.AutoField(max_length=10)
    email = models.EmailField(max_length=75)
    password = models.CharField(max_length=50)
    nin = models.AutoField(max_length=20)
    dob = models.DateField(max_length=10)
    gender = models.CharField(max_length=15)
    physicaladdress = models.CharField(max_length=20)


class Eligibility(models.Model):
    yearexp = models.TextField(max_length=50)
    notmidman = models.CharField(max_length=40)
    skillset = models.TextField(max_length=50)
    access = models.CharField(max_length=25)    



class Expertise(models.Model):
    qualifications = models.TextField(max_length=20)
    portifolio = models.TextField(max_length=20)



class Referees(models.Model):
    description = models.CharField(max_length=80)
    ref1name = models.CharField(max_length=15)
    ref1email = models.EmailField(max_length=25)
    ref1description = models.CharField(max_length=30)
    ref1phone = models.AutoField(max_length=10)
    ref2name = models.CharField(max_length=15)
    ref2email = models.EmailField(max_length=25)
    ref2description = models.CharField(max_length=30)
    ref2phone = models.AutoField(max_length=10)



class Service(models.Model):
    category = models.CharField(max_length=30)
    Availability = DateField(auto_now_add=true)
    starttime = models.DateTimeField(auto_now_add=true)
    endtime = models.DateTimeField(auto_now_add=true)
    pricehour = models.AutoField(max_length=6)
    Agree = models.TextField()












