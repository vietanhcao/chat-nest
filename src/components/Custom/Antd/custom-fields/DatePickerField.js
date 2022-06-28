import React from 'react'
import PropTypes from 'prop-types'
import { Label, FormGroup } from 'reactstrap';
import { DatePicker, Form as FormAntd   } from 'antd';



DatePickerField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
}
DatePickerField.defaultProps = {
  label: '',
  placeholder: '',
  disabled: false
}


function DatePickerField(props) {
  const {field, form, label, placeholder, disabled} = props;

  const {name} = field;

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    const onChangeEvent = {
      target: {
        value: date,
        name: name
      }
    }
    field.onChange(onChangeEvent)

  }

  const { errors, touched } = form
  const showError = errors[name] && touched[name]


  return (
    <FormGroup>
      {label && <Label for={name} >{label}</Label>}

      <FormAntd.Item
        validateStatus={showError &&"error"}
        help={showError && errors[name]}
      >
        <DatePicker  
          {...field}

          onChange={onChange} 

          placeholder={placeholder}
          disabled={disabled}
          
        />
      </FormAntd.Item>
    </FormGroup>
  )
}

export default DatePickerField

