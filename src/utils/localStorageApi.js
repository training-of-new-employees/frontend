/* eslint-disable new-cap */
/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
class localStorageApi {
	constructor() {}

	//* получение данных
	getItem = (name) => localStorage.getItem(`${name}`);

	//* сохранения данных
	setItem = (name, value) => {
		// todo не знаю что будем сохранять оставлю пока так
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
}

export const apiLocalStore = new localStorageApi();
