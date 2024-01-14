import { baseUrl } from './constants';
import { getToken } from './tokenStorage';

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse = async (res) => {
    if (res.ok) {
      return await res.json();
    }
    throw await res.json();
  };

  // Делаем запрос на сервер
  _makeRequest = async (url, method, data, formData, params) => {
    const token = getToken();
    // console.log('_makeRequest=>', token);
    if (token) {
      this._headers.Authorization = `Bearer ${token.access}`;
    }
    const parameters = params || '';
    const config = {
      method,
      headers: this._headers,
    };

    if (data !== undefined) {
      console.log('_makeRequest => body ', data);
      config.body = JSON.stringify(data);
      console.log('_makeRequest=> url, config.body', config.body);
    }
    if (formData !== undefined) {
      console.log('_makeRequest => body ', formData);
      config.body = formData;
    }

    const res = await fetch(`${this._baseUrl}${url}${parameters}`, config);

    return this._checkResponse(res);
  };

  // default
  // Авторизация. Получить токен
  postLogIn = (data) => this._makeRequest('/login/', 'POST', data);
  // Хендлер "Выход из аккаунта"
  postLogOut = () => this._makeRequest('/logout/', 'POST');
  // Сброс пароля пользователя
  postResetPassword = () => this._makeRequest('/password/', 'POST', data);

  // admin
  // Создание пользователя
  createUser = (data) => this._makeRequest('/admin/employee/', 'POST', data);
  // Изменение данных администратора
  editAdminInfo = (data) => this._makeRequest('/admin/info/', 'POST', data);
  // Создание администратора
  registerAdmin = (data) => this._makeRequest('/admin/register/', 'POST', data);
  // Верификация email'a пользователя
  verifyUser = (data) => this._makeRequest('/admin/verify/', 'POST', data);

  // lesson & courses
  // ТРЕБУЮТСЯ УТОЧНЕНИЯ
  // Получение урока
  getLesson = () => this._makeRequest('/lesson/', 'GET');
  // ТРЕБУЮТСЯ УТОЧНЕНИЯ
  // Хендлер "Создание урока"
  postLesson = (data) => this._makeRequest('/admin/lessons/', 'POST', data);
  // ТРЕБУЮТСЯ УТОЧНЕНИЯ
  // Удаление урока
  deleteLesson = () => this._makeRequest('/lesson/', 'DELETE');

  // Хендлер "Получение урока"
  getLessonByID = (id) => this._makeRequest(`/admin/lessons/${id}/`, 'GET');
  // Хендлер "Редактирование урока"
  updateLessonByID = (id, data) =>
    this._makeRequest(`/admin/lessons/${id}/`, 'PATCH', data);
  // Хендлер "Список уроков курса"
  getCourseLessonList = (id) =>
    this._makeRequest(`admin/courses/${id}/lessons/`, 'GET');
  // Хендлер "Получение данных курсов"
  getCourses = () => this._makeRequest('/admin/courses/', 'GET');
  // Хендлер "Создание курса"
  postCourses = (data) => this._makeRequest('/admin/courses/', 'POST', data);
  // Хендлер "Редактирование курса"
  updateCourseByID = (id, data) =>
    this._makeRequest(`/admin/courses/${id}/`, 'PATCH', data);
  // Хендлер "Редактирование курса"
  postCourse = (data) => this._makeRequest('/admin/courses/', 'POST', data);

  // position
  // Получение всех должностей
  getPositions = () => this._makeRequest('/positions/', 'GET');
  // Создание новой должности
  postPositions = () => this._makeRequest('/positions/', 'POST', data);
  // Обновление данных о должности
  updatePositionsByID = (id, data) =>
    this._makeRequest(`/positions/update/${id}/`, 'PATCH', data);
  // Получение по ID
  getPositionsByID = (id) => this._makeRequest(`/positions/${id}/`, 'GET');

  // user
  // Получение данных пользователей
  getUsers = () => this._makeRequest('/users/', 'GET');
  // Архивирование пользователя по id
  archiveUserByID = (id) => this._makeRequest(`/users/archive/${id}`, 'PATCH');
  // Получение данные авторизованного пользователя
  getUserInfo = () => this._makeRequest('/users/info/', 'GET');
  // Активация пользователя и установка ему пароля
  activateUser = (data) => this._makeRequest('/users/set-password/', 'POST');
  // Получение данных пользователя
  getUserByID = (data) => this._makeRequest(`/users/${id}`, 'GET');
  // Изменение данных пользователя
  updateUserByID = (id, data) =>
    this._makeRequest(`/users/${id}/`, 'PATCH', data);
}

const config = {
  baseUrl: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const api = new Api(config);
