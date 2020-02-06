from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
from .views import IndexView, SortitionView, sort
from .service import sort

urlpatterns = [
    path('list/', IndexView.as_view(), name = 'players_list'),
    path('sortition/', SortitionView.as_view(), name = 'new_sortition'),
    path('sort/', sort, name = 'sortition'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
