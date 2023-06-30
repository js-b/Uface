﻿# Uface
Система посещаемости на основе распознавания лиц

В начале надо установить XAMPP Controll Panel 

https://www.apachefriends.org/download.html

![img.png](README/img.png)

После импортировать базу данных flask_db.sql

![img.png](README/img_1.png)

Заменяем на свои адреса в файле app.py

C:/Users/Jahan/PycharmProjects/Uface/resources/haarcascade_frontalface_default.xml"

C:/Users/Jahan/PycharmProjects/Uface/dataset"

Импортируем в проект библиотеки

numpy, Flask, mysql-connector, 
opencv-python, opencv-contrib-python, Pillow
![img_5.png](README/img_5.png)

Далее запускаем программу

![img_2.png](README/img_2.png)

Добавляем 100 фотографий и жмем Готово

![img_3.png](README/img_3.png)

Нажимаем распознавание лиц и проверяем результат

![img_4.png](README/img_4.png)
