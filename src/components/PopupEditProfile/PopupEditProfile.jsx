import React from 'react';
import Input from '../ui-kit/Input/Input';
import Popup from '../ui-kit/Popup/Popup';
import popupEditstyle from './PopupEditProfile.module.scss';
import useValidation from '../hooks/useValidation';

export default function PopupEditProfile() {
    const { values, handleChange } = useValidation();
    const handleClose = () => {
        // Реализуйте логику закрытия попапа
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Реализуйте логику отправки формы
    };

    return (
        <Popup
            name='editProfile'
            title='Редактирование основной информации'
            onClose={handleClose}
            onSubmit={handleSubmit}>
            <ul className={popupEditstyle.popupEditContainer}>
                <li>
                    <label htmlFor='фамилия'>Фамилия</label>
                    <Input
                        id='фамилия'
                        name='фамилия'
                        type="text"
                        placeholder='Введите Фамилию'
                        onChange={handleChange}
                        values={values.lastName} />
                </li>
                <li>
                    <label htmlFor='фамилия'>Имя</label>
                    <Input
                        id='имя'
                        name='имя'
                        type="text"
                        placeholder='Введите Имя'
                        onChange={handleChange}
                        values={values.lastName} />
                </li>
                <li>
                    <label htmlFor='фамилия'>Отчество</label>
                    <Input
                        id='отчество'
                        name='отчество'
                        type="text"
                        placeholder='Введите Отчество'
                        onChange={handleChange}
                        values={values.lastName} />
                </li>
            </ul>
            <ul>
                <li>
                    <label htmlFor='компания'>Компания</label>
                    <Input
                    id='компания'
                    type='text'
                    name='компания'
                    placeholder='Введите название компании'
                    />
                </li>
            </ul>
        </Popup>
    );
}