from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
from player.views import IndexView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', IndexView.as_view(), name = 'index'),
    path('players/', include('player.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
