import { useCallback, useState } from 'react';

/**
 *Form validation hook.
 *Returns an object with the following fields:
 *- values {name: string, email: string, password: string} with form values set by user
 *- isValid {boolean} when true, the form is valid
 *- handleChange {(e: ChangeEvent) => void} change handler. You must add it to the form being validated
 *- resetForm {() => void} reset handler
 */

export default function useValidation() {
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
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name' && e.target.validity.patternMismatch) {
      e.target.setCustomValidity('Имя не должно содержать специальных символов');
      setIsValid(false);
      setErrors(false);
    } else {
      e.target.setCustomValidity('');
    }
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  const validate = () => {
    const newErrors = {};
    if (!values.email || !values.email.includes('@')) {
      newErrors.email = 'Введите корректный email';
    }

    if (!values.password || values.password.length < 6) {
      newErrors.password = 'Пароль должен содержать не менее 6 символов';
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Пароли не совпадают';
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
    validate
  };
}
