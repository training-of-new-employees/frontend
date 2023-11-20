class localStorageApi {
    constructor() {
    };

    //* получение данных
    getItem = (name) => {
        return localStorage.getItem(`${name}`);
    };

    //* сохранения данных
    setItem = (name, value) => {
        //todo не знаю что будем сохранять оставлю пока так
        localStorage.setItem(`${name}`, value);
    };

    //* удаление данных
    delItem = (name) => {
        localStorage.removeItem(`${name}`);
    };

    //* полная очистка хранилища
    clear = () => {
        localStorage.clear();
    };
};

export const apiLocalStore = new localStorageApi();
