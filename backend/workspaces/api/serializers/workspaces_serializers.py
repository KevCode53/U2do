from rest_framework import serializers
from workspaces.models import Workspace
from workspaces.api.serializers.styles_serializers import StylesSerializer
from workspaces.api.serializers.todos_serializers import TodoSerializer
from users.api.serializers.user_serializers import ProfileSerializer, UserSerializer


class WorkspaceSerializer(serializers.ModelSerializer):
    style = StylesSerializer(read_only=True)
    task = TodoSerializer(read_only=True, many=True)
    colaborators = ProfileSerializer(many=True, read_only=True)

    class Meta:
        model = Workspace
        fields = ('id', 'name', 'created', 'created_by', 'colaborators', 'style', 'task')