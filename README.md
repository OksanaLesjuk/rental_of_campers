<!-- # React homework template

Цей проект був створений за допомогою
[Create React App](https://github.com/facebook/create-react-app). Для знайомства
і налаштування додаткових можливостей
[звернися до документації](https://facebook.github.io/create-react-app/docs/getting-started).

## Створення репозиторію за шаблоном

Використовуй цей репозиторій організації GoIT як шаблон для створення репозиторію
свого проєкта. Для цього натисни на кнопку `«Use this template»` і вибери опцію
`«Create a new repository»`, як показано на зображенні.

![Creating repo from a template step 1](./assets/template-step-1.png)

На наступному кроці відкриється сторінка створення нового репозиторію. Заповни поле
його імені, переконайся що репозиторій публічний, після чого натисни кнопку
`«Create repository from template»`.

![Creating repo from a template step 2](./assets/template-step-2.png)

Після того як репозиторій буде створено, необхідно перейти в налаштування
створеного репозиторію на вкладку `Settings` > `Actions` > `General` як
показано на зображенні.

![Settings GitHub Actions permissions step 1](./assets/gh-actions-perm-1.png)

Проскроливши сторінку до самого кінця, у секції `«Workflow permissions»` вибери
опцію `«Read and write permissions»` і постав галочку в чекбоксі. Це
необхідно для автоматизації процесу деплою проєкту.

![Settings GitHub Actions permissions step 2](./assets/gh-actions-perm-2.png)

Тепер у тебе є особистий репозиторій проекту, зі структурою файлів і папок
репозиторію-шаблону. Далі працюй із ним як із будь-яким іншим особистим репозиторієм,
клонуй його собі на комп'ютер, пиши код, роби комміти і відправляй їх на
GitHub.

## Підготовка до роботи

1. Переконайся що на комп'ютері встановлено LTS-версія Node.js.
   [Завантаж і встанови](https://nodejs.org/en/) її якщо необхідно.
2. Встанови базові залежності проєкту командою `npm install`.
3. Запусти режим розробки, виконавши команду `npm start`.
4. Перейди в браузері за адресою [http://localhost:3000](http://localhost:3000).
   Ця сторінка буде автоматично перезавантажуватися після збереження змін у файлах проєкту.

## Деплой

Продакшн версія проєкту буде автоматично проходити лінтинг, збиратися і
деплоїтися на GitHub Pages, у гілку `gh-pages`, щоразу, коли оновлюється
гілка `main`. Наприклад, після прямого пушу або прийнятого пул-реквесту. Для цього
необхідно у файлі `package.json` відредагувати поле `homepage`, замінивши
`your_username` і `your_repo_name` на свої, і відправити зміни на GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/"
```

Далі необхідно зайти в налаштування GitHub-репозиторію (`Settings` > `Pages`) і
виставити роздачу продакшн-версії файлів із папки `/root` гілки `gh-pages`, якщо
це не було зроблено автоматично.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплоя

Статус деплою крайнього коміту відображається іконкою біля його ідентифікатора.

- **Жовтий колір** - виконується збірка і деплой проєкту.
- **Зелений колір** - деплой завершився успішно.
- **Червоний колір** - під час лінтингу, сборки або деплою сталася помилка.

Детальнішу інформацію про статус можна подивитися, клікнувши на іконку, і
у вікні, що випадає, перейти за посиланням `Details`.

![Deployment status](./assets/deploy-status.png)

### Жива сторінка

Через якийсь час, зазвичай кілька хвилин, живу сторінку можна буде подивитися
за адресою, вказаною у відредагованій властивості `homepage`. Наприклад, ось
посилання на живу версію для цього репозиторію
[https://goitacademy.github.io/react-homework-template](https://goitacademy.github.io/react-homework-template).

Якщо відкривається порожня сторінка, переконайся, що у вкладці `Console` немає помилок
пов'язаних із неправильними шляхами до CSS і JS файлів проєкту (**404**). Швидше
за все у тебе неправильне значення властивості `homepage` у файлі `package.json`.

### Маршрутизація

Якщо додаток використовує бібліотеку `react-router-dom` для маршрутизації,
необхідно додатково налаштувати компонент `<BrowserRouter>`, передавши у пропе
`basename` точну назву твого репозиторію. Слеш на початку рядка обов'язковий.

```jsx
<BrowserRouter basename="/your_repo_name">
  <App />
</BrowserRouter>
```

## Як це працює

![How it works](./assets/how-it-works.png)

1. Після кожного пушу в гілку `main` GitHub-репозиторія, запускається спеціальний
   скрипт (GitHub Action) з файла `.github/workflows/deploy.yml`.
2. Усі файли репозиторію копіюються на сервер, де проект ініціалізується і
   проходить лінтинг і збірку перед деплоєм.
3. Якщо всі кроки пройшли успішно, зібрана продакшн-версія файлів проєкту
   відправляється в гілку `gh-pages`. В іншому випадку, в лозі виконання
   скрипта буде вказано в чому проблема. -->
