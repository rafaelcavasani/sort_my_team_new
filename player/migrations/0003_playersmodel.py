# Generated by Django 3.0.3 on 2020-02-05 16:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('player', '0002_teammodel'),
    ]

    operations = [
        migrations.CreateModel(
            name='PlayersModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('position', models.CharField(max_length=25)),
                ('importance', models.IntegerField()),
            ],
        ),
    ]
