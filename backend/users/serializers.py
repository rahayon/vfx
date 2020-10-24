from rest_framework import serializers
from .models import User

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=68, min_length=8, write_only=True)
    class Meta:
        model = User
        fields = ('email', 'password')

    def validate(self, attrs):
        email = attrs.get('email', '')
        password = attrs.get('password', '')

        return attrs

    def create(self, validated_data):
        return User.objects._create_user(**validated_data)
