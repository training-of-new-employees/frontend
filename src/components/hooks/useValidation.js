import { useCallback, useState } from 'react';

/**
 * Form validation hook.
 * Returns an object with the following fields:
 * - values {name: string, email: string, password: string} with form values set by user
 * - isValid {boolean} when true, the form is valid
 * - handleChange {(e: ChangeEvent) => void} change handler. You must add it to the form being validated
 * - resetForm {() => void} reset handler
 */

export default function useValidation() {
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
