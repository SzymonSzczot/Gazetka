from django.conf.global_settings import AUTH_USER_MODEL
from django.db import models


class Article(models.Model):
    title = models.CharField(default="", max_length=120)
    slug = models.SlugField(max_length=100)

    content = models.TextField()

    author = models.ForeignKey(
        AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        related_name="articles",
        null=True
    )
