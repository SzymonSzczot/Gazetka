from rest_framework import serializers

from users.models import UserDetails


class DetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserDetails
        fields = (
            "id",
            "email",
            "phone",
            "description",
        )
