from django.urls import path
from .views import signup, GoogleLogin

urlpatterns = [
    path('signup/', signup, name='signup'),
    path('google/', GoogleLogin.as_view(), name='google_login'),
]