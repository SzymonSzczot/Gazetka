from rest_framework.routers import DefaultRouter

from articles.views import ArticlesViewSet

router = DefaultRouter()
router.register("items", ArticlesViewSet)

urlpatterns = router.urls
