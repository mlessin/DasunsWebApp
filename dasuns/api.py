from book.models import book
from rest_framework import viewsets, permissions
from .serializers import BookSerializers

#Book viewsets
class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = BookSerializer