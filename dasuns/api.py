from book.models import book
from PersonalInfo.models import PersonalInfo
from rest_framework import viewsets, permissions
from .serializers import BookSerializers
from .serializers import PersonalInfoSerializer
from .serializers import EligibilitySerializer

#Book viewsets
class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = BookSerializer




class PersonalInfoViewSet(viewsets.ModelViewSet):
    queryset = PersonalInfo.objects.all()
    permission_classes = [
        permissions.AllowAny
    ] 
    serializer_class = PersonalInfoSerializer
   

class EligibilityViewSet(viewsets.ModelViewSet):
    queryset = Eligibility.objects.all()
    permission_classes = [
        permissions.AllowAny
    ] 
    serializer_class = EligibilitySerializer
























































































