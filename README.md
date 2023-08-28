### Hexlet tests and linter status:
[![Actions Status](https://github.com/bahtiyar0/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/bahtiyar0/frontend-project-44/actions)


Описание
«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново. Игры:

Калькулятор. Арифметические выражения, которые необходимо вычислить.
Прогрессия. Поиск пропущенных чисел в последовательности чисел.
Определение четного числа.
Определение наибольшего общего делителя.
Определение простого числа.


Начать игру можно путем выгрузки к себе в консоль.

git clone: git@github.com:bahtiyar0/frontend-project-44.git
cd frontend-project-44
make install
npm install
npm link


Игра: "Проверка на чётность".
Суть игры в следующем: игрокe показывается случайное число. Ему нужно ответить yes, если число чётное, или no — если нечётное.

Игра начинается с команды:
make brain-even

<a href="https://asciinema.org/a/5vBwCqxymnUgFkefjJyws6e6T" target="_blank"><img src="https://asciinema.org/a/5vBwCqxymnUgFkefjJyws6e6T.svg" /></a>

Игра: "Калькулятор".
Суть игры в следующем: игрокe показывается случайное число которое нужно сложить, вычесть, разделить или умножить в зависимости от данных. Ему нужно дать правильный ответ.

Игра начинается с команды:
make brain-calc

<a href="https://asciinema.org/a/3G6xUuvCvIhVuY7cwbOT09hVV" target="_blank"><img src="https://asciinema.org/a/3G6xUuvCvIhVuY7cwbOT09hVV.svg" /></a>



Игра: "НОД".
Суть игры в следующем: пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

Игра начинается с команды:
make brain-gcd

[![asciicast](https://asciinema.org/a/jvi1BPQqmSAhD6M7sJ2YZP4Wj.svg)](https://asciinema.org/a/jvi1BPQqmSAhD6M7sJ2YZP4Wj)



Игра: "Арифметическая прогрессия".
Показываем игроку ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Игрок должен определить это число.

Игра начинается с команды:
make brain-progression

<a href="https://asciinema.org/a/H3d13VzZ1yLeYIL8kJ7a7HQ0K" target="_blank"><img src="https://asciinema.org/a/H3d13VzZ1yLeYIL8kJ7a7HQ0K.svg" /></a>


Игра: "Простое ли число?".
Суть игры в следующем: пользователю дается рандомное число, и пользователю нужно ответить 'yes' если число простое и 'no' если нет  

Игра начинается с команды:
make brain-prime

<a href="https://asciinema.org/a/KuXZcz8uDhsSkA5Zd3AsRq0Fq" target="_blank"><img src="https://asciinema.org/a/KuXZcz8uDhsSkA5Zd3AsRq0Fq.svg" /></a>
