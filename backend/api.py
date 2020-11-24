from .models import *
from rest_framework import viewsets, permissions
from .serializers import *


# # Book Viewset
# class BookViewSet(viewsets.ModelViewSet):
#     queryset = Book.objects.all()
#     permission_class = [
#         permissions.AllowAny
#     ]
#     serializer_class = BookSerializer


# Book Viewset
class BookViewSet(viewsets.ModelViewSet):
    # queryset = Book.objects.all()
    permission_class = [
        permissions.IsAuthenticated,
     ]

    serializer_class = BookSerializer

    def get_queryset(self):
        return self.request.user.Book.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# Serviceprovider Viewset
class ServiceproviderViewSet(viewsets.ModelViewSet):
    # queryset = Serviceprovider.objects.all()
    permission_class = [
        permissions.IsAuthenticated,
     ]

    serializer_class = ServiceproviderSerializer

    def get_queryset(self):
        return self.request.user.Serviceprovider.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)





# # PersonalInfo Viewset
# class PersonalInfoViewSet(viewsets.ModelViewSet):
#     # queryset = PersonalInfo.objects.all()
#     permission_class = [
#         permissions.IsAuthenticated,
#      ]

#     serializer_class = PersonalInfoSerializer

#     def get_queryset(self):
#         return self.request.user.PersonalInfo.all()

#     def perform_create(self, serializer):
#         serializer.save(owner=self.request.user)

# # Eligibility Viewset
# class EligibilityViewSet(viewsets.ModelViewSet):
#     # queryset = Eligibility.objects.all()
#     permission_class = [
#         permissions.IsAuthenticated,
#      ]

#     serializer_class = EligibilitySerializer

#     def get_queryset(self):
#         return self.request.user.Eligibility.all()

#     def perform_create(self, serializer):
#         serializer.save(owner=self.request.user)

# # Expertise Viewset
# class ExpertiseViewSet(viewsets.ModelViewSet):
#     # queryset = Expertise.objects.all()
#     permission_class = [
#         permissions.IsAuthenticated,
#      ]

#     serializer_class = ExpertiseSerializer

#     def get_queryset(self):
#         return self.request.user.Expertise.all()

#     def perform_create(self, serializer):
#         serializer.save(owner=self.request.user)

# # Referees Viewset
# class RefereesViewSet(viewsets.ModelViewSet):
#     # queryset = Referees.objects.all()
#     permission_class = [
#         permissions.IsAuthenticated,
#      ]

#     serializer_class = RefereesSerializer

#     def get_queryset(self):
#         return self.request.user.Referees.all()

#     def perform_create(self, serializer):
#         serializer.save(owner=self.request.user)


# # Service Viewset
# class ServiceViewSet(viewsets.ModelViewSet):
#     # queryset = Service.objects.all()
#     permission_class = [
#         permissions.IsAuthenticated,
#      ]

#     serializer_class = ServiceSerializer

#     def get_queryset(self):
#         return self.request.user.Service.all()

#     def perform_create(self, serializer):
#         serializer.save(owner=self.request.user)