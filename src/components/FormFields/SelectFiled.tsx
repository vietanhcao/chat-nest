export default {};

// import { FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';
// import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
// import React from 'react';
// import { Control, useController } from 'react-hook-form';

// export interface SelectOption {
//   label?: string;
//   value: string | number;
// }

// interface Props {
//   name: string;
//   control: Control<any>;
//   label: string;
//   disabled?: boolean;
//   options: SelectOption[];
// }

// export const SelectFiled = ({ name, control, label, disabled, options }: Props) => {
//   const {
//     field: { value, onChange, onBlur, ref },
//     fieldState: { invalid, error },
//   } = useController({
//     name,
//     control,
//   });

//   return (
//     <FormControl
//       disabled={disabled}
//       margin="normal"
//       variant="outlined"
//       // component="fieldset"
//       error={invalid}
//       fullWidth
//       size="small"
//     >
//       <InputLabel id={`name_${label}`}>{label}</InputLabel>
//       <Select labelId={`name_${label}`} value={value} onChange={onChange} onBlur={onBlur} label={label} defaultValue="">
//         {/* <MenuItem value="">
//           <em>All</em>
//         </MenuItem> */}
//         {options.map((option) => {
//           return (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           );
//         })}
//       </Select>
//       <FormHelperText>{error?.message}</FormHelperText>
//     </FormControl>
//   );
// };
