from django.apps import AppConfig


class LandtimeConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "landtime"

    def ready(self):
        from . import signals  # noqa
