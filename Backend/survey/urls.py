from django.urls import path
from .views import SurveySubmissionCreateView

urlpatterns = [
    path('submit/', SurveySubmissionCreateView.as_view(), name='survey-submit'),
]