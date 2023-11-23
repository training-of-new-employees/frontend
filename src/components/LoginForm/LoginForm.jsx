import LoginFormStyles from './LoginForm.module.scss';

// @TODO добавить минимальное и максимальное значение символов в инпутах
// @TODO настроить в будущем кнопку "зарегистрироваться"
// @TODO настроить в будущем кнопку "забыли пароль"
// @TODO настроить в будущем кнопку "запомнить меня"
// @TODO сформировать внешний вид чекбоса по макету
// @TODO разобраться почему еслинт ругается на label
// @TODO сделать сабмит

export default function LoginForm() {
	return (
		<div className={LoginFormStyles.form_container}>
			<h1 className={LoginFormStyles.form_title}>Добро пожаловать!</h1>
			<form className={LoginFormStyles.form}>
				<p className={LoginFormStyles.input_inscription}>E-mail</p>
				<input
					id="login-email"
					required
					className={LoginFormStyles.input}
					type="email"
					placeholder="Введите e-mail"
					defaultValue=""
					name="email"
				/>
				<p className={LoginFormStyles.input_inscription}>Пароль</p>
				<input
					id="login-password"
					required
					className={LoginFormStyles.input}
					type="password"
					placeholder="Введите пароль"
					defaultValue=""
					name="password"
				/>
				<div className={LoginFormStyles.info_container}>
					<div className={LoginFormStyles.checkbox_container}>
						<input
							className={LoginFormStyles.checkbox}
							type="checkbox"
							name="checkbox"
						/>
						<p className={LoginFormStyles.input_inscription}>Запомнить меня</p>
					</div>
					<a className={LoginFormStyles.forgot_password} to="/forgot">
						Забыли пароль?
					</a>
				</div>
				<div className={LoginFormStyles.buttons_container}>
					<button className={LoginFormStyles.submit} type="submit">
						Войти
					</button>
					<button
						className={LoginFormStyles.button}
						type="button"
						to="/register"
					>
						Зарегистрироваться
					</button>
				</div>
			</form>
		</div>
	);
}
