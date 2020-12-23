from rest_framework import permissions,viewsets
from .serializers import LeadSerializer
from rest_framework.generics import ListCreateAPIView,DestroyAPIView
from .models import *


class LeadViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = LeadSerializer

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
