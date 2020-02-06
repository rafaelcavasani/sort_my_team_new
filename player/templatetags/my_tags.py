from django import template

register = template.Library()

@register.filter(name = 'importance_name')
def importance_name(value):
    enum = {
        "0": "Goleiro",
        "1": "Zagueiro",
        "2": "Lateral",
        "3": "Meio Campo",
        "4": "Atacante"
    }
    return enum[value]