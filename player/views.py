from django.shortcuts import render
from django.views.generic import TemplateView
from .models import SortitionModel, PlayerModel

class IndexView(TemplateView):
    template_name = 'index.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['sortitions'] = SortitionModel.objects.all()
        return context

class SortitionView(TemplateView):
    template_name = 'sortition.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['players'] = PlayerModel.objects.all().order_by('position')
        return context
