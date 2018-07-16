from django.conf.urls import url

from . import consumers

websocket_urlpatterns = [
    url(r'^ws/api/(?P<room_name>[^/]+)/$',consumers.ChatConsumer),
]