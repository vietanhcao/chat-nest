export default {};
// import { FormHelperText } from '@material-ui/core';
// import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
// import React from 'react';
// import { Control, useController } from 'react-hook-form';

// export interface RadioOption {
//   label?: string;
//   value: string | number;
// }

// interface Props {
//   name: string;
//   control: Control<any>;
//   label: string;
//   disabled?: boolean;
//   options: RadioOption[];
// }

// export const RadioGroupFiled = ({ name, control, label, disabled, options }: Props) => {
//   const {
//     field: { value, onChange, onBlur, ref },
//     fieldState: { invalid, error },
//   } = useController({
//     name,
//     control,
//   });

//   return (
//     <FormControl disabled={disabled} margin="normal" component="fieldset" error={invalid}>
//       <FormLabel component="legend">{label}</FormLabel>
//       <RadioGroup name={name} value={value} onChange={onChange} onBlur={onBlur}>
//         {options.map((option) => {
//           return <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />;
//         })}
//       </RadioGroup>
//       <FormHelperText>{error?.message}</FormHelperText>
//     </FormControl>
//   );
// };
