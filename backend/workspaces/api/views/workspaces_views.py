from django.shortcuts import get_object_or_404

from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from workspaces.api.serializers.workspaces_serializers import WorkspaceSerializer

class WorkspacesViewset(viewsets.GenericViewSet):
    serializer_class = WorkspaceSerializer
    # permission_classes = (IsAuthenticated)

    def get_queryset(self, pk=None):
        if self.queryset is None:
            return self.serializer_class().Meta.model.objects.all()
        return self.queryset

    def get_object(self, pk):
        return get_object_or_404(self.serializer_class.Meta.model, pk=pk)

    def list(self, request):
        workspaces = self.get_queryset()
        workspaces_serializer = self.serializer_class(workspaces, many=True)
        return Response(workspaces_serializer.data, status=status.HTTP_200_OK)