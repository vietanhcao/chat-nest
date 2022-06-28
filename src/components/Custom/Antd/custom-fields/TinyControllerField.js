import { Form } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import { Controller } from 'react-hook-form'
import TinyMceEditor from 'src/components/Editor/TinyMceEditor'

TinyControllerField.propTypes = {
  control: PropTypes.object,
  height: PropTypes.number,
  disabled: PropTypes.bool,
}

TinyControllerField.defaultProps = { height: 500, disabled: false }

function TinyControllerField(props) {
  const { control, name, validateStatus, onChange, height, disabled, style, setValue } = props

  const onEditorChange = (e, editor) => {
    // console.log(e, editor)
    const wordcount = editor.plugins.wordcount
    // console.log(wordcount.body)
    console.log(wordcount.body.getWordCount())
    setValue(name, e, { shouldValidate: true })
  }

  return (
    <Controller
      {...props}
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <Form.Item style={style} validateStatus={validateStatus && 'error'} help={validateStatus}>
            <TinyMceEditor
              disabled={disabled}
              height={height}
              {...field}
              onChange={onChange ? onChange : onEditorChange}
            />
          </Form.Item>
        )
      }}
    />
  )
}
export default TinyControllerField
