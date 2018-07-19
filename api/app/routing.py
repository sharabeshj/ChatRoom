from django.conf.urls import url

from . import consumers

websocket_urlpatterns = [
    url(r'^api/(?P<room_name>[^/]+)$',consumers.ChatConsumer),
]