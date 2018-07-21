from channels.generic.websocket import AsyncWebsocketConsumer
import json
from asgiref.sync import async_to_sync

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s'%self.room_name

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()
    
    async def disconnect(self,close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self,text_data):
        text_data_json = json.loads(text_data)
        username = text_data_json['username']
        content = text_data_json['content']
        time = text_data_json['time']

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type' : 'chat_message',
                'username' : username,
                'content' : content,
                'time' : time
            }
        )
    
    async def chat_message(self,event):
        username = event['username']
        content  = event['content']
        time = event['time']

        await self.send(text_data=json.dumps({
            'username' : username,
            'content' : content,
            'time' : time
        }))