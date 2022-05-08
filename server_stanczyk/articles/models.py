from ckeditor.fields import RichTextField
from django.conf.global_settings import AUTH_USER_MODEL
from django.db import models


class Article(models.Model):
    SPORT = "sport"
    CULTURE = "culture"
    NEWS = "news"
    GOSSIP = "gossip"
    PHILOSOPHY = "philosophy"
    HISTORY = "history"
    WOMEN_HISTORY = "women_history"

    CATEGORY_CHOICES = (
        (SPORT, "SPORT"),
        (CULTURE, "CULTURE"),
        (NEWS, "NEWS"),
        (GOSSIP, "GOSSIP"),
        (PHILOSOPHY, "PHILOSOPHY"),
        (HISTORY, "HISTORY"),
        (WOMEN_HISTORY, "WOMEN_HISTORY"),
    )

    title = models.CharField(default="", max_length=120)
    slug = models.SlugField(max_length=100)
    category = models.CharField(choices=CATEGORY_CHOICES, max_length=20, default="")

    header = models.CharField(max_length=500, default="")
    content = RichTextField()

    author = models.ForeignKey(
        AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="articles",
        null=False
    )
    picture = models.ImageField(upload_to="articles/", null=True)
    class Meta:
        ordering = ("-id", )

    def get_author(self):
        return self.author.details.get_details()
