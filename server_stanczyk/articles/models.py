from django.conf.global_settings import AUTH_USER_MODEL
from django.db import models


class Article(models.Model):
    title = models.CharField(default="", max_length=120)
    slug = models.SlugField(max_length=100)

    header = models.CharField(max_length=500, default="")
    content = models.TextField()

    author = models.ForeignKey(
        AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="articles",
        null=False
    )
    picture = models.ImageField(upload_to="articles/", null=True)

    def get_author(self):
        return self.author.details.get_details()
