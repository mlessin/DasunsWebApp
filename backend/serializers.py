from rest_framework import serializers
from .models import *


#Book Serialiser
class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book 
        fields = '__all__'


#Serviceprovider Serialiser
class ServiceproviderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Serviceprovider 
        fields = '__all__'




#Rating Serialiser
class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = '__all__'

        


# #PersonalInfo Serialiser
# class PersonalInfoSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = PersonalInfo 
#         fields = '__all__'


# #Eligibility Serialiser
# class EligibilitySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Eligibility 
#         fields = '__all__'


# #Expertise Serialiser
# class ExpertiseSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Expertise 
#         fields = '__all__'


# #Referees Serialiser
# class RefereesSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Referees 
#         fields = '__all__'


# #Service Serialiser
# class ServiceSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Service 
#         fields = '__all__'

        