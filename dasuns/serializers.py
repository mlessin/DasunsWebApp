from rest_framework import serializers
from book.models import Book

#Book serializers
class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('_all_')
        
