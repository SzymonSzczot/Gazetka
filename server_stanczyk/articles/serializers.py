from rest_framework import serializers

from articles.models import Article
from users.serializers import DetailsSerializer


class ArticleSerializer(serializers.ModelSerializer):
    author = DetailsSerializer(source="author.details")

    class Meta:
        model = Article
        fields = (
            "id",
            "title",
            "content",
            "header",
            "picture",
            "author",
            "category"
        )
