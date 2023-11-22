import RegisterFormStyles from './RegisterForm.module.scss';

// @TODO добавить минимальное и максимальное значение символов в инпутах
// @TODO настроить в будущем ссылку "назад"
// @TODO сформировать внешний вид чекбоса по макету
// @TODO разобраться почему еслинт ругается на label
// @TODO сделать сабмит

export default function RegisterForm() {
	return (
		<div className={RegisterFormStyles.form_container}>
			<h1 className={RegisterFormStyles.form_title}>Регистрация на QuickOn</h1>
			<form className={RegisterFormStyles.form}>
				<p className={RegisterFormStyles.input_inscription}>E-mail</p>
				<input
					id="register-email"
					required
					className={RegisterFormStyles.input}
					type="email"
					placeholder="Введите e-mail"
					defaultValue=""
					name="email"
				/>
				<p className={RegisterFormStyles.input_inscription}>Пароль</p>
				<input
					id="register-password"
					required
					className={RegisterFormStyles.input}
					type="password"
					placeholder="Введите пароль"
					defaultValue=""
					name="password"
				/>
				<p className={RegisterFormStyles.input_inscription}>Компания</p>
				<input
					id="register-company"
					required
					className={RegisterFormStyles.input}
					type="text"
					placeholder="Введите компанию"
					defaultValue=""
					name="company"
				/>
				<div className={RegisterFormStyles.checkbox_container}>
					<input
						className={RegisterFormStyles.checkbox}
						type="checkbox"
						name="checkbox"
					/>
					<p className={RegisterFormStyles.input_inscription}>Запомнить меня</p>
				</div>
				<div className={RegisterFormStyles.buttons_container}>
					<a className={RegisterFormStyles.back} to="/login">
						Назад
					</a>
					<button className={RegisterFormStyles.submit} type="submit">
						Зарегистрироваться
					</button>
				</div>
			</form>
		</div>
	);
}
