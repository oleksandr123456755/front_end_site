document.addEventListener('DOMContentLoaded', function () {
    // Приклад новин
    const news = [
        { title: 'Оновлення сайту', content: 'Ми додали нові курси для підготовки до НМТ.' },
        { title: 'Новий розділ', content: 'Відкрито новий форум для обговорення задач з математики.' },
        { title: 'Нове відео!', content: 'Додано нове відео з розбором геометричної задачі!' },
    ];

    const newsList = document.getElementById('news-list');
    news.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p>`;
        newsList.appendChild(newsItem);
    });

    // Приклад популярних курсів
    const courses = [
        { name: 'Алгебра', description: 'Основи алгебри для підготовки до НМТ.' },
        { name: 'Геометрія', description: 'Вивчення основних принципів геометрії.' },
        { name: 'Стереометрія', description: 'Усе, що необхідно знати про фігури у просторі до НМТ' },
    ];

    const coursesList = document.getElementById('courses-list');
    courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.classList.add('course-item');
        courseItem.innerHTML = `<h3>${course.name}</h3><p>${course.description}</p>`;
        coursesList.appendChild(courseItem);
    });

    // Вхід користувача
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Простий приклад перевірки логіну та паролю
        if (username === 'admin' && password === 'password') {
            document.getElementById('user-info').innerHTML = `<p>Ласкаво просимо, ${username}!</p>`;
            loginForm.style.display = 'none';
        } else {
            alert('Неправильний логін або пароль');
        }
    });

    // Відео матеріали
    const videos = [
        { title: 'Алгебра: Лекція 1. Рівняння з модулем.', url: './video/video1.mp4' },
        { title: 'Геометрія: Лекція 1. Завдання з НМТ', url: './video/video2.mp4' },
    ];

    const videosDiv = document.getElementById('videos');
    videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        videoItem.innerHTML = `<h4>${video.title}</h4><iframe width="560" height="315" src="${video.url}" frameborder="0" allowfullscreen></iframe>`;
        videosDiv.appendChild(videoItem);
    });

    // Текстові матеріали
    const texts = [
        { title: 'Основи алгебри', content: 'А́лгебра — розділ математики, що вивчає математичні операції і відношення, та утворення, що базуються на них: многочлени, алгебраїчні рівняння, алгебраїчні структури. Вивчення властивостей композицій різного виду в XIX столітті привело до думки, що основне завдання алгебри — вивчення властивостей операцій незалежно від обєктів, до яких вони застосовуються. З того часу алгебру стали розглядати як загальну науку про властивості та закони композиції операцій. У наші дні алгебра — одна з найважливіших частин математики, що має застосування як у суто теоретичних, так і в практичних галузях науки.' },
        { title: 'Основи геометрії', content: 'Геоме́трія — розділ математики, наука про просторові форми, відношення і їхні узагальнення.' },
    ];

    const textsDiv = document.getElementById('texts');
    texts.forEach(text => {
        const textItem = document.createElement('div');
        textItem.classList.add('text-item');
        textItem.innerHTML = `<h4>${text.title}</h4><p>${text.content}</p>`;
        textsDiv.appendChild(textItem);
    });

    // Інтерактивні тести
    const tests = [
        { question: 'Знайдіть корінь рівняння: 3х-4=8 ?', options: ['3', '4', '5'], answer: '4' },
        { question: 'Знайдіть середню лінію трапеції, якщо її основи дорівнюють відповідно 1 і 15?', options: ['7', '8', '9'], answer: '8' },
        { question: 'Знайдіть наступний член ариметичної прогресії: 1; 13; 25; ?', options: ['37', '47', '57'], answer: '37' },
        { question: 'Скільки буде 3+5?', options: ['7', '8', '9'], answer: '8' },
        { question: 'Скільки буде 2+2?', options: ['3', '4', '5'], answer: '4' },
        { question: 'Знайдіть наступний член ариметичної прогресії: 1; 3; 9; ?', options: ['27', '81', '90'], answer: '27' },
        { question: 'Обчисліть значення виразу 2+7(11-3)?', options: ['37', '48', '58'], answer: '58' },
        { question: 'Знайдіть бічну сторону рівнобедреного трикутника, якщо його основа 5, а периметр 25?', options: ['7', '10', '9'], answer: '10' },
    ];

    const testsDiv = document.getElementById('tests');
    tests.forEach(test => {
        const testItem = document.createElement('div');
        testItem.classList.add('test-item');
        let optionsHtml = '';
        test.options.forEach(option => {
            optionsHtml += `<label><input type="radio" name="${test.question}" value="${option}"> ${option}</label><br>`;
        });
        testItem.innerHTML = `<h4>${test.question}</h4>${optionsHtml}<button onclick="checkAnswer('${test.question}', '${test.answer}')">Перевірити</button><div id="result-${test.question}"></div>`;
        testsDiv.appendChild(testItem);
    });

    window.checkAnswer = function (question, correctAnswer) {
        const options = document.getElementsByName(question);
        let selectedAnswer;
        options.forEach(option => {
            if (option.checked) {
                selectedAnswer = option.value;
            }
        });
        const resultDiv = document.getElementById(`result-${question}`);
        if (selectedAnswer === correctAnswer) {
            resultDiv.innerHTML = '<p style="color:green;">Правильно!</p>';
        } else {
            resultDiv.innerHTML = '<p style="color:red;">Неправильно. Спробуйте ще раз.</p>';
        }
    };

    // Форуми
    const forums = [
        { name: 'Загальні питання', description: 'Обговорення загальних питань підготовки до НМТ.' },
        { name: 'Алгебра', description: 'Обговорення задач з алгебри.' },
        { name: 'Геометрія', description: 'Обговорення задач з геометрії.' },
    ];

    const forumSections = document.getElementById('forum-sections');
    forums.forEach(forum => {
        const forumItem = document.createElement('div');
        forumItem.classList.add('forum-item');
        forumItem.innerHTML = `<h3>${forum.name}</h3><p>${forum.description}</p>`;
        forumSections.appendChild(forumItem);
    });
});



// Список зареєстрованих користувачів
let users = [];

// Реєстрація користувача
const registrationForm = document.getElementById('registration-form');
registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('reg-password').value;

    // Зберігання даних користувача
    const newUser = { username, email, password };
    users.push(newUser);
    console.log('Новий користувач:', newUser);

    // Очистка полів форми після реєстрації
    registrationForm.reset();
});

// Вхід для зареєстрованих користувачів
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Перевірка наявності користувача в списку
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        alert('Ви увійшли до системи!');
        // Тут можна виконати перехід на іншу сторінку або зробити що-небудь інше
    } else {
        alert('Неправильний логін або пароль. Спробуйте ще раз.');
    }

    // Очистка полів форми після входу
    loginForm.reset();
});

const forumForm = document.getElementById('forum-form');
const forumInput = document.getElementById('forum-input');
const messagesList = document.getElementById('messages-list');

forumForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const message = forumInput.value.trim();
    if (message !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = message;
        messagesList.appendChild(listItem);
        forumInput.value = '';
    }
});