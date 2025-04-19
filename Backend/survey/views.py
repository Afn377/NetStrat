from django.shortcuts import render

# Create your views here.

from rest_framework import generics
from .models import SurveySubmission
from .serializers import SurveySubmissionSerializer

class SurveySubmissionCreateView(generics.CreateAPIView):
    queryset = SurveySubmission.objects.all()
    serializer_class = SurveySubmissionSerializer