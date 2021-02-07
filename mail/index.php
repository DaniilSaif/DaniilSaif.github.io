<!DOCTYPE html>
<html>
<!-- Служебная часть -->

<head>
  <!-- Заголовок страницы -->
  <title>Заголовок</title>
  <!-- Настраиваем служебную информацию для браузеров -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
    /* Тут будут стили */
  </style>
    <link rel="stylesheet" href="style.css">
<!-- Закрываем служебную часть страницы -->
</head>

<body>
<!-- Создаём форму и указываем её обработчик и метод -->
<form action="https://daniilsaif.github.io/mail/mail.php" method="post">

    Ваше имя <input type="text" name="first_name"><br>
    Email: <input type="text" name="email" required placeholder="Обязательное поле"><br>
    Сообщение:<br><textarea rows="5" name="message" cols="30"></textarea><br>
    <input type="submit" name="submit" value="Submit">
    </form>
</body>
<!-- Конец всей страницы -->

</html>
