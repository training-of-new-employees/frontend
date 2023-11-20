class MainApi {
    constructor(url) {
        // урл бэка на который кидаем запросы
        this._baseUrl = url;
    }

    //при ошибке выводит в консоль посвеченную надпись об ошибке
    // вывод ошибок в качестве пример api.getinfoError('текст ошибки', err);
    getInfoError = (err, errInf) => {
        // наш текст для понимания что произошло, окрашен в консоли в красный, увеличен шрифт
        console.log(
            `%c${err}`,
            `color: red; font-size: 24px; background-color: black; padding: 3px; text-align: center;`
        );
        // сама ошибка
        console.error(errInf);
    };

    // проверка успешности запроса, если все ок то преобразование ответа в жсон если нет, то выводит ошибку
    _checkResponse = (res) => {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        }
    };

    //! все что ниже для примера использования
    // пример регистрация пользователя
    // regist = ({ email, password, name }) => {
    //     return fetch(`${this._baseUrl}/signup`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ password, email, name }),
    //     }).then(this._checkResponse);
    // };

    // api
    //     .authorization(userData)
    //     .then((res) => {
    //         какой то код если все хорошо
    //     })
    //     .catch((err) => {
    //         если ошибка то выводим понятный для нас текст в консоль и потом саму ошибку
    //         api.getInfoError("Авторизация не удалась", err);
    //     });
}

export const api = new MainApi();
