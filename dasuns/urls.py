<<<<<<< HEAD
from rest_framework import routers
from .api import BookViewSet
from .api import PersonalInfoViewset
from .api import EligibilityViewset

router= routers.DefaultRouter()
router.register('api/Book', BookViewSet, 'book')

urlpattern = router.urls


 







=======
"""dasuns URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from django.contrib import admin
# from django.urls import path

# urlpatterns = [
#     path('admin/', admin.site.urls),
# ]

from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    path('', include('backend.urls')),
    path('', include('accounts.urls'))
    
]

# from django.contrib import admin
# from django.urls import path, include
# from rest_framework import permissions
# from drf_yasg.views import get_schema_view
# from drf_yasg import openapi


# schema_view = get_schema_view(
#     openapi.Info(
#         title="DASUNS WEB APP",
#         default_version='v1',
#         description="Test description",
#         terms_of_service="https://www.ourapp.com/policies/terms/",
#         contact=openapi.Contact(email="contact@expenses.local"),
#         license=openapi.License(name="Test License"),
#     ),
#     public=True,
#     permission_classes=(permissions.AllowAny,),
# )


# urlpatterns = [
#     # path('admin/', admin.site.urls),
#     # path('auth/', include('authentication.urls')),
#     # path('social_auth/', include(('social_auth.urls', 'social_auth'),
#     #                              namespace="social_auth")),
#     path('backend/', include('backend.urls')),
#     path('', schema_view.with_ui('swagger',
#                                  cache_timeout=0), name='schema-swagger-ui'),

#     path('api/api.json/', schema_view.without_ui(cache_timeout=0),
#          name='schema-swagger-ui'),
#     path('redoc/', schema_view.with_ui('redoc',
#                                        cache_timeout=0), name='schema-redoc'),
# ]
>>>>>>> 49947499720ab8bc03fed142598f6e0246ac264a

