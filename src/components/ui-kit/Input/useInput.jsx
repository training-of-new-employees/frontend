import { useState } from 'react';
import { useValidation } from '../../hooks/useValidation';

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const valid = useValidation(value, validations);
  const [isDirty, setIsDirty] = useState(false);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onBlur = (e) => {
    setIsDirty(true);
  };
  return {
    value,
    isDirty,
    onChange,
    onBlur,
    ...valid,
  };
};
export default useInput;
