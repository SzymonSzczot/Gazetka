from rest_framework import serializers

from users.models import UserDetails


class DetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserDetails
        fields = read_only_fields =(
            "id",
            "email",
            "phone",
            "description",
            "picture"
        )
