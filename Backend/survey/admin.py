from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import SurveySubmission

@admin.register(SurveySubmission)
class SurveySubmissionAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'submitted_at')  # Customize as needed
    search_fields = ('name', 'email')
    list_filter = ('submitted_at',)