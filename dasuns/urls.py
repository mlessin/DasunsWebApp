from rest_framework import routers
from .api import BookViewSet
from .api import PersonalInfoViewset
from .api import EligibilityViewset

router= routers.DefaultRouter()
router.register('api/Book', BookViewSet, 'book')

urlpattern = router.urls


 








