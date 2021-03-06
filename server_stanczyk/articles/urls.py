from rest_framework.routers import DefaultRouter

from .views import ArticlesViewSet

router = DefaultRouter()
router.register("items", ArticlesViewSet)

urlpatterns = router.urls
