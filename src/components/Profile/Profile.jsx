import { useState } from 'react';

import adminIcon from '../../images/ui/Admin.svg';
import uploadPhoto from '../../images/ui/Photo.svg';
import examplePhoto from '../../images/example/UserPhotoExample.png';

import profileInfoStyles from './ProfileInfo.module.scss';

const ProfileInfo = () => {
	const [userState, setUserState] = useState({
		name: 'Алла Андреева',
		position: 'Администратор',
		email: 'admin@yandex.ru',
		photo: examplePhoto,
	});

	return (
		<form className={profileInfoStyles.profileForm}>
			<div className={profileInfoStyles.headerContainer}>
				<h2 className={profileInfoStyles.header}>Профиль</h2>
				<div className={profileInfoStyles.userRoleContainer}>
					<p>Роль:</p>
					<div className={profileInfoStyles.roleContainer}>
						<img alt="Администратор" src={adminIcon} />
					</div>
				</div>
			</div>
			<div className={profileInfoStyles.infoContainer}>
				<div className={profileInfoStyles.pictureContainer}>
					<img
						alt="Фото сотрудника"
						src={userState.photo}
						className={profileInfoStyles.profilePicture}
					/>
					<button type="button" className={profileInfoStyles.uploadPhoto}>
						<img alt="Загрузить фото" src={uploadPhoto} />
						Загрузить фото
					</button>
					<button type="button" className={profileInfoStyles.uploadPhoto}>
						Сохранить изменения
					</button>
				</div>
				<div className={profileInfoStyles.mainInfoContainer}>
					<label className={profileInfoStyles.label} htmlFor="name">
						ФИО
					</label>
					<input
						className={profileInfoStyles.inputText}
						id="name"
						value={userState.name}
					/>
					<label className={profileInfoStyles.label} htmlFor="position">
						Должность
					</label>
					<input className={profileInfoStyles.inputList} id="position" />
					<label className={profileInfoStyles.label} htmlFor="email">
						E-mail
					</label>
					<input className={profileInfoStyles.inputText} id="email" />
					<label className={profileInfoStyles.label} htmlFor="password">
						Пароль
					</label>
					<input
						className={profileInfoStyles.inputText}
						id="password"
						value="******"
					/>
				</div>
			</div>
		</form>
	);
};

export default ProfileInfo;
