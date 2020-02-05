from django.shortcuts import render
from django.views.generic import TemplateView
from .models import SortitionModel

class IndexView(TemplateView):
    template_name = 'index.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['sortitions'] = SortitionModel.objects.all().prefetch_related('teams')
        return context
