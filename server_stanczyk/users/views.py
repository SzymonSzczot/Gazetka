from rest_framework import viewsets

from users.models import UserDetails
from users.serializers import DetailsSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = UserDetails.objects.all()
    serializer_class = DetailsSerializer
