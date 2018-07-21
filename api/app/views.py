from models import Chat_Room,Profile
from serializers import ChatRoomSerializer,ProfileSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from django.http import Http404

# Create your views here.

class ChatRoomList(APIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get(self,request,format=None):
        chat_rooms = Chat_Room.objects.all()
        serializer = ChatRoomSerializer(chat_rooms,many=True)
        return Response(serializer.data)
    
    def post(self,request,format=None):
        serializer = ChatRoomSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def perform_create(self,serializer):
        serializer.save(users = self.request.user)

class ChatRoomDetail(APIView):

    def get_object(self, room_name):
        try:
            return Chat_Room.objects.get(room_name=room_name)
        except Chat_Room.DoesNotExist:
            raise Http404

    def get(self,request,room_name,format=None):
        chat_room = self.get_object(room_name)
        serializer = ChatRoomSerializer(chat_room)
        return Response(serializer.data)

    def delete(self,request,room_name,format=None):
        chat_room = self.get_object(room_name)
        chat_room.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
