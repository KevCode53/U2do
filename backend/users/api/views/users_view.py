from django.shortcuts import get_object_or_404

from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from users.api.serializers.user_serializers import UserSerializer

class UserViewset(viewsets.GenericViewSet):
    serializer_class = UserSerializer
    # permission_classes = (IsAuthenticated)

    def get_queryset(self, pk=None):
        if self.queryset is None:
            return self.serializer_class().Meta.model.objects.filter(is_active=True)
        return self.queryset

    def get_object(self, pk):
        return get_object_or_404(self.serializer_class.Meta.model, pk=pk)

    def list(self, request):
        users = self.get_queryset()
        users_serializer = self.serializer_class(users, many=True)
        return Response(users_serializer.data, status=status.HTTP_200_OK)