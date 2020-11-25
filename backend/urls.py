from rest_framework import routers
from .api import *


router = routers.DefaultRouter()
router.register('api/books', BookViewSet, 'backend')
router.register('api/serviceproviders', ServiceproviderViewSet, 'backend')
# router.register('api/personalinfo', PersonalInfoViewSet, 'backend')
# router.register('api/eligibility', EligibilityViewSet, 'backend')
# router.register('api/expertize', ExpertiseViewSet, 'backend')
# router.register('api/referee', RefereesViewSet, 'backend')
# router.register('api/service', ServiceViewSet, 'backend')

urlpatterns = router.urls

