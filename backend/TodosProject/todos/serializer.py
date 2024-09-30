from rest_framework.serializers import ModelSerializer
from .models import Todo
from rest_framework.exceptions import ValidationError

class TodoSerializer(ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'

    def validate_title(self, value):
        if len(value) > 10:
            raise ValidationError('Title is too long')
        return value
    
    def validate_description(self, value):
        if len(value) > 100:
            raise ValidationError('Description is too long')
        return value
