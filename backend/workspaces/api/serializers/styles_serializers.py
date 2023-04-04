from rest_framework import serializers
from workspaces.models import StyleWorkspace


class StylesSerializer(serializers.ModelSerializer):

    class Meta:
        model = StyleWorkspace
        fields = ('bg_color', 'bg_image')