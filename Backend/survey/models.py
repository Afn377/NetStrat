from django.db import models

class SurveySubmission(models.Model):
    SATISFACTION_CHOICES = [(i, str(i)) for i in range(1, 6)]
    HELPFULNESS_CHOICES = [(i, str(i)) for i in range(1, 6)]

    name = models.CharField(max_length=100)
    email = models.EmailField()
    school = models.CharField(max_length=200)
    satisfaction = models.IntegerField(choices=SATISFACTION_CHOICES)
    helpfulness = models.IntegerField(choices=HELPFULNESS_CHOICES)
    
    most_valuable_part = models.TextField(verbose_name="Which part of the webinar did you find most valuable?")
    other_questions = models.TextField(verbose_name="What other questions or information would you like answered and talked about?")
    suggestions = models.TextField(blank=True, null=True, verbose_name="Do you have any suggestions for improving webinars?")
    specific_suggestions = models.TextField(blank=True, null=True, verbose_name="If you answered yes for the previous question, what are they?")
    
    would_recommend = models.BooleanField(verbose_name="Based on your experience, would you recommend our webinar series to a friend or colleague?")
    need_help = models.BooleanField(verbose_name="Is there any school or situation we can help you with, within the confines of EOF/First Gen?")
    help_details = models.TextField(blank=True, null=True, verbose_name="If you answered yes for the previous question, please provide us a brief explanation of the circumstance.")
    
    other_concerns = models.TextField(blank=True, null=True, verbose_name="Any other questions or concerns?")
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.email})"