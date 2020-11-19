from rest_framework import routers
from .api import BookViewSet

router= routers.DefaultRouter()
router.register('api/Book', BookViewSet, 'book')

urlpattern = router.urls
