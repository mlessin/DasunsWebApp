from rest_framework import routers
from .api import *


router = routers.DefaultRouter()
router.register('api/bookings', BookViewSet, 'bookings')
router.register('api/serviceproviders', ServiceproviderViewSet, 'serviceProviders')
router.register('api/ratings', RatingViewSet, 'ratings')

urlpatterns = router.urls


