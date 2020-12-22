from django.urls import path,include
from .api_views import *


urlpatterns = [
    path('api/leads/',LeadView.as_view(),name='leads')
]
