from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    about = models.TextField(max_length=250, blank=True)

@receiver(post_save,sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save,sender=True)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()


class Chat_Room(models.Model):
    room_name = models.CharField(max_length=100)
    users = models.ManyToManyField(Profile)
