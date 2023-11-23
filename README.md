# QuickOn Frontend

Приложение создано с помощью [Create React App](https://github.com/facebook/create-react-app).\
Фронтенд часть платформы для обучения новых сотрудников QuickON.

- [Ссылка на макет](https://www.figma.com/file/xJlE2tj2ErCpKZJGtuEwZv/Платформа-для-обучения-новых-сотрудников?type=design&node-id=8-3&mode=design&t=9E8zslkZG1KDeZTx-0).
- [Ссылка на storybook](https://training-of-new-employees.github.io/storybook/).

## Используемые скрипты

Скрипты проекта:

### `npm start`

Запускает лайв-сервер по локальному адресу [http://localhost:3000](http://localhost:3000).
При изменении кода страница обновляется.

### `npm test`

Запускает тест в режиме отслеживания.
Подробнее тут - [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm build`

Создает готовый проект в папке `build`, который можно деплоить на сервер.\
Подробнее про деплой - [deployment](https://facebook.github.io/create-react-app/docs/deployment).

### `storybook`

Запускает лайв-сервер сторибука по адресу [http://localhost:6006](http://localhost:6006).\
При изменении кода страница обновляется.\
При удалении и добавлении новых компонентов могут возникнуть ошибки.

### `build-storybook`

Создает готовый отдельный проект сторибука в папке `storybook-static`, который можно деплоить на сервер.

### Другие возможности

#### Husky

Запускает ESLint, Prettier и Commitizen перед отправкой коммита.

#### Commitizen

Генерирует шаблоны коммитов в проекте.

#### ESLint

Анализ кода.

#### Prettier

Форматирование кода.

## Структура проекта

- `components\`
  Базовые компоненты
- `pages\`
  Компоненты роутов
- `utils\`
  Переменные и константы
- `vendor\`
  Внешние подключаемые ресурсы
- `images\`
  Все файлы изображений
- - `images\stubs`
    Заглушки любых изображений приходящих с сервера
- - `images\ui`
    Картинки элементы интерфейса пользователя

## Работа с ветками

Работа с проектом ведется из ветки `develop`.

В зависимости от задачи от неё создается ответвление:

- `feat/` - фича, новый функционал
- `fix/` - исправление ошибок, правки
- `refactor/` - переписывание кода, рефактор

По окончании работы над веткой требуется создать `Pull request` из рабочей ветки в ветку `Develop`.

Пример названия ответвления для нового компонента `Profile` -
`feat/ProfileComponent`.
