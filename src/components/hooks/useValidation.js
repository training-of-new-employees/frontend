/* eslint-disable no-unused-expressions */
/* eslint-disable default-case */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfile } from '../../services/profile/profileSlice';

export default function useValidations() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfile);
  }, [dispatch]);

  const { profile, status } = useSelector((state) => state.profileState);
  const [values, setValues] = useState({
    firstName: 'Алла',
    lastName: 'Андреева',
    middleName: '',
    email: 'Admin@yandex.ru',
    password: '',
    confirmPassword: '',
    position: 'Администратор',
    photo: '',
    company: 'Glass&Gmetry',
  });

  useEffect(() => {
    setValues({
      firstName: profile.name,
      lastName: profile.surname,
      middleName: profile.patronymic,
      email: profile.email,
      password: '',
      confirmPassword: '',
      position: profile.position_name,
      photo: '',
      company: profile.company_name,
    });
  }, [status]);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const newErrors = { ...errors };
    if (values.confirmPassword !== values.password) {
      newErrors.confirmPassword = 'Пароли не совпадают';
    } else {
      delete newErrors.confirmPassword;
    }
    setErrors(newErrors);
    setIsValid(
      Object.keys(newErrors).length === 0 &&
        Object.values(newErrors).every((e) => e === '')
    );
  }, [values.confirmPassword, values.password]);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).*$/;
      let error = '';
      if (name === 'company') {
        if (value.length < 1 || value.length > 256) {
          error = 'Название компании должно быть от 1 до 256 символов';
        } else if (/[#*]/.test(value)) {
          error =
            'Компания не должна содержать специальные символы типа # или *';
        }
      }
      if (name === 'email') {
        if (value.length < 5 || value.length > 30) {
          error = 'E-mail должен содержать от 5 до 50 символов';
        } else if (!/[@]/.test(value)) {
          error = 'Неверно введен e-mail Пример: people@mail.ru';
        }
      }
      if (name === 'password') {
        if (!passwordRegex.test(value)) {
          error =
            'Пароль должен содержать хотя бы один большой символ, один маленький символ, одну цифру и один специальный символ';
        } else if (value.length < 6 || value.length > 30) {
          error = 'Пароль должен содержать от 6 до 30 символов';
        }
      }
      if (name === 'name' && e.target.validity.patternMismatch) {
        error = 'Имя не должно содержать специальных символов';
        setIsValid(false);
        setErrors(false);
      } else {
        e.target.setCustomValidity('');
      }
      setValues({ ...values, [name]: value });
      setErrors({ ...errors, [name]: error });
      setIsValid(e.target.closest('form').checkValidity() && !error);
    },
    [errors]
  );

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  const validate = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).*$/;
    const newErrors = {};
    if (!values.email || !values.email.includes('@')) {
      newErrors.email = 'Введите корректный email';
    }

    if (!values.password || !passwordRegex.test(values.password)) {
      newErrors.password =
        'Пароль должен содержать хотя бы один большой символ, один маленький символ, одну цифру и один специальный символ';
    } else if (values.password.length < 6) {
      newErrors.password = 'Пароль должен содержать не менее 6 символов';
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Пароли не совпадают';
    }
    if (
      !values.company ||
      values.company.length > 256 ||
      /[#*]/.test(values.company)
    ) {
      newErrors.company = 'Неверное название компании';
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  };

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    validate,
  };
}

export function useValidation(value, validations) {
  const [isEmpty, setIsEmpty] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [companyError, setCompanyError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState(false);
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).*$/;
  const emailRegex = /^\S+@\S+\.\S+$/;
  useEffect(() => {
    value.length < validations.minLength || value.length > 50
      ? setIsEmpty(true)
      : setIsEmpty(false);

    if (validations.type === 'email') {
      !emailRegex.test(value) ? setEmailError(true) : setEmailError(false);
    }
    if (validations.type === 'company') {
      /[#*]/.test(value) ? setCompanyError(true) : setCompanyError(false);
    }
    if (
      validations.type === 'password' ||
      validations.type === 'confirmPassword'
    ) {
      !passwordRegex.test(value)
        ? setPasswordError(true)
        : setPasswordError(false);
    }
    if (
      validations.type === 'confirmPassword' ||
      validations.type === 'password'
    ) {
      validations?.isPassword?.password !==
      validations?.isPassword?.confirmPassword
        ? setPasswordConfirm(true)
        : setPasswordConfirm(false);
    }
  }, [value, validations]);

  useEffect(() => {
    if (isEmpty || emailError || passwordError || passwordConfirm) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [isEmpty, emailError, passwordError, passwordConfirm]);
  return {
    isEmpty,
    emailError,
    passwordError,
    isValid,
    passwordConfirm,
    companyError,
  };
}
