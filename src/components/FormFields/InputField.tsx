import React, { HTMLAttributes, InputHTMLAttributes } from 'react';
import { useController } from 'react-hook-form';
import { Control } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label: string;
}

export const InputField = ({ name, control, label, ...inputProps }: Props) => {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <div
    // label={label}
    // fullWidth
    // size={'small'}
    // margin="normal"
    // variant="outlined"
    // value={value}
    // onChange={onChange}
    // onBlur={onBlur}
    // inputRef={ref}
    // error={invalid}
    // helperText={error?.message}
    // inputProps={inputProps}
    />
  );
};
