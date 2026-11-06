<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Therth.am</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <div class="logo">Therth.am</div>

    <nav>
        <a href="#">Главная</a>
        <a href="#">Авто</a>
        <a href="#">Недвижимость</a>
        <a href="#">Электроника</a>
        <a href="#">Услуги</a>
    </nav>

    <button class="add-btn">
        + Добавить объявление
    </button>
</header>

<section class="hero">
    <div class="overlay">
        <h1>Найди всё <span>в одном месте</span></h1>
        <p>Авто, квартиры, телефоны, техника и многое другое</p>

        <div class="search-box">
            <input type="text" placeholder="Поиск объявлений">
            <select>
                <option>Ереван</option>
                <option>Абовян</option>
                <option>Гюмри</option>
            </select>
            <button>Поиск</button>
        </div>
    </div>
</section>

<section class="categories">
    <div class="category">🚗 Авто</div>
    <div class="category">🏠 Недвижимость</div>
    <div class="category">📱 Телефоны</div>
    <div class="category">💻 Электроника</div>
    <div class="category">🛋 Мебель</div>
    <div class="category">🔧 Услуги</div>
</section>

<section class="products">
    <h2>Популярные объявления</h2>

    <div class="cards">

        <div class="card">
            <img src="car.jpg" alt="">
            <h3>Mercedes GLE 350</h3>
            <p>$58 000</p>
        </div>

        <div class="card">
            <img src="house.jpg" alt="">
            <h3>Современный дом</h3>
            <p>$250 000</p>
        </div>

        <div class="card">
            <img src="iphone.jpg" alt="">
            <h3>iPhone 15 Pro</h3>
            <p>$820</p>
        </div>

    </div>
</section>

</body>
</html>
