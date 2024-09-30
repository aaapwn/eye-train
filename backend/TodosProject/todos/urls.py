from django.urls import path
from .views import *

urlpatterns = [
    path('login/', LoginView.as_view()),
    path('todos/', TodoView.as_view()),
    path('todo/<int:pk>/', ManageTodoView.as_view())
]
