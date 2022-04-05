from django.conf.global_settings import AUTH_USER_MODEL
from django.db import models


class UserDetails(models.Model):
    user = models.OneToOneField(
        AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=False,
        related_name="details",
    )
    description = models.TextField(max_length=400, default="")
    phone = models.CharField(max_length=20, default="")
    email = models.EmailField(max_length=40, default="")
    picture = models.ImageField(upload_to="users/", null=True)
