from django.db import models
from enum import Enum
from datetime import datetime

class SortitionModel(models.Model):
    date = models.DateField(auto_now=True)
    teams = models.ManyToManyField('TeamModel', blank=True)

    def __str__(self):
        return self.date.strftime('%d/%m/%Y')

class TeamModel(models.Model):
    name = models.CharField(max_length=50)
    players = models.ManyToManyField('PlayerModel', blank=True)

    def __str__(self):
        return self.name

class PlayerModel(models.Model):
    name = models.CharField(max_length=100)
    position = models.IntegerField(choices=[(0, 'Goleiro'), (1, 'Zagueiro'), (2, 'Lateral'), (3, 'Meio Campo'), (4, 'Atacante')])
    importance = models.IntegerField()

    def __str__(self):
        return self.name