from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from app import views

from . import views

urlpatterns = [
    url(r'^chatList/$',views.ChatRoomList.as_view()),
    url(r'^chatDetail/(?P<room_name>[-\w]+)/$',views.ChatRoomDetail.as_view()),

]