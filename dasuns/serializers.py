from rest_framework import serializers
from book.models import Book
from PersonalInfo.models import PersonalInfo
from Eligibility.models import Eligibility

#serializers from models.py
class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('_all_')
        
class PersonalInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalInfo
        fields = ('_all_')


class EligibilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Eligibility
        fields = ('_all_')














