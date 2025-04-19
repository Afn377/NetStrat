from rest_framework import serializers
from .models import SurveySubmission

class SurveySubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SurveySubmission
        fields = '__all__'