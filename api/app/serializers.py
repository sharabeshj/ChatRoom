from rest_framework import serializers
from app.models import Chat_Room,Profile

class ChatRoomSerializer(serializers.ModelSerializer):
    users = serializers.ReadOnlyField(source='users.user.username')
    class Meta:
        model = Chat_Room
        fields = ('room_name','users')


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = ('user','about')