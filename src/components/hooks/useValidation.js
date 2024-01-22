/* eslint-disable no-unused-expressions */
/* eslint-disable default-case */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

// import { useSelector, useDispatch } from 'react-redux';
// import { fetchProfile } from '../../services/profile/profileSlice';

import { useEffect, useState, useCallback } from 'react';

export default function useValidations() {
  const [values, setValues] = useState({
    firstName: 'Алла',
    lastName: 'Андреева',
    middleName: '',
    email: 'Admin@yandex.ru',
    password: '',
    position: 'Администратор',
    photo: '',
    company: 'Glass&Gmetry',
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name } = target;
    const { value } = target;
    if (name === 'name' && target.validity.patternMismatch) {
      target.setCustomValidity('Имя не должно содержать специальных символов');
      setIsValid(false);
      setErrors(false);
    } else {
      target.setCustomValidity('');
    }
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    setValues,
    handleChange,
    errors,
    setErrors,
    isValid,
    setIsValid,
    resetForm,
  };
}
export function useValidation(value, validations) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).*$/;
  const emailRegex = /^\S+@\S+\.\S+$/;

  const [isEmpty, setIsEmpty] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    value.length < validations.minLength || value.length > 50
      ? setIsEmpty(true)
      : setIsEmpty(false);

    if (validations.type === 'email') {
      !emailRegex.test(value) ? setEmailError(true) : setEmailError(false);
    }

    if (validations.type === 'password') {
      !passwordRegex.test(value)
        ? setPasswordError(true)
        : setPasswordError(false);
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || emailError || passwordError) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [isEmpty, emailError, passwordError]);
  return {
    isEmpty,
    emailError,
    passwordError,
    isValid,
  };
}
