import registerFormStyles from './RegisterForm.module.scss';

// @TODO добавить минимальное и максимальное значение символов в инпутах
// @TODO настроить в будущем ссылку "назад"
// @TODO настроить в будущем кнопку "запомнить меня"
// @TODO сформировать внешний вид чекбоса по макету
// @TODO сделать сабмит

export default function RegisterForm() {
	return (
		<div className={registerFormStyles.form_container}>
			<h1 className={registerFormStyles.form_title}>Регистрация на QuickOn</h1>
			<form className={registerFormStyles.form}>
				<p className={registerFormStyles.input_inscription}>E-mail</p>
				<input
					id="register-email"
					required
					className={registerFormStyles.input}
					type="email"
					placeholder="Введите e-mail"
					defaultValue=""
					name="email"
				/>
				<p className={registerFormStyles.input_inscription}>Пароль</p>
				<input
					id="register-password"
					required
					className={registerFormStyles.input}
					type="password"
					placeholder="Введите пароль"
					defaultValue=""
					name="password"
				/>
				<p className={registerFormStyles.input_inscription}>Компания</p>
				<input
					id="register-company"
					required
					className={registerFormStyles.input}
					type="text"
					placeholder="Введите компанию"
					defaultValue=""
					name="company"
				/>
				<div className={registerFormStyles.checkbox_container}>
					<input
						className={registerFormStyles.checkbox}
						id="register-checkbox"
						type="checkbox"
						name="checkbox"
					/>
					<label
						className={registerFormStyles.input_label}
						htmlFor="register-checkbox"
					>
						Запомнить меня
					</label>
				</div>
				<div className={registerFormStyles.buttons_container}>
					<a className={registerFormStyles.back} to="/login">
						Назад
					</a>
					<button className={registerFormStyles.submit} type="submit">
						Зарегистрироваться
					</button>
				</div>
			</form>
		</div>
	);
}
