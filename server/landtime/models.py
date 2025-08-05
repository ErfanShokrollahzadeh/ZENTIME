from django.db import models

# Create your models here.

class Product(models.Model):
    title = models.CharField(max_length=200)
    price = models.IntegerField()
    short_description = models.TextField(max_length=500, blank=True)
    is_exist = models.BooleanField(default=True)
    rating = models.FloatField(default=0.0)
    image = models.ImageField(blank=True, null=True)

    def __str__(self):
        return self.title
