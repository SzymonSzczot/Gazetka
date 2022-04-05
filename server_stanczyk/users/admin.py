from django.contrib import admin

from users.models import UserDetails


class UserDetailAdmin(admin.ModelAdmin):
    pass


admin.site.register(UserDetails, UserDetailAdmin)
