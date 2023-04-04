from django.utils.translation import gettext as _
from django.contrib.auth import get_user_model, authenticate
from users.models import User, Profile
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class ProfileSerializer(serializers.ModelSerializer):
    img_url = serializers.SerializerMethodField()
    username = serializers.SerializerMethodField()

    class Meta:
      model = Profile
      fields = ('user', 'username', 'image', 'phone', 'address', 'img_url')

    def get_img_url(self, instance):
      return instance.preview_url()

    def get_username(self, instance):
      return instance.user.username

class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'name', 'last_name', 'profile')

    def create(self, validate_data):
      """ Create a new User"""
      return get_user_model().objects.create_user(**validate_data)


