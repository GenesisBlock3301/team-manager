from rest_framework import serializers
from .models import *


class LoadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = "__all__"

