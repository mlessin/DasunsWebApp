from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('book.urls')),
    path('', include('PersonalInfo.urls')),
    path('', include('Eligibility.urls')),

]
