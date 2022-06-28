import React from 'react'
import PropTypes from 'prop-types'
import { Label } from 'reactstrap'
import { Form as FormAntd, Input } from 'antd'
import { ErrorMessage } from 'formik'



InputFieldAntd.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
}

InputFieldAntd.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false
}

function InputFieldAntd(props) {
  const {
    field, form, // fastField formik
    type, label, placeholder, disabled // optional 
  } = props;

  const {name} = field

  //handle error
  const {errors, touched } = form;
  const showError = errors[name] && touched[name] ;

  
  return (
    <div>
      {label && <Label for={name} >{label}</Label>}
      <FormAntd.Item
        validateStatus={showError &&"error"}
        help={showError && errors[name]}
      >
      <Input 
        id={name} 
        // name={name}
        // value={value}
        // onChange={onChange}
        // onBlur={onBlur}
        {...field}

        // type={type}
        disabled={disabled}
        placeholder={placeholder} 

        />
      </FormAntd.Item>

    </div>
  )
}
export default InputFieldAntd

