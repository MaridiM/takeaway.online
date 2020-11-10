import React from "react"
import PropTypes from "prop-types"
import { Form, Input, } from "antd"

import { validateField } from "utils/helpers"

const { TextArea } = Input

const FormField = ({
  className,
  textarea,
  label,
  name,
  placeholder,
  icon,
  type,
  handleChange,
  handleBlur,
  touched,
  errors,
  values,
  status,
  text
}) => {
  const TagName = textarea ? TextArea : Input
  return (


    <Form.Item
        validateStatus={validateField(name, touched, errors)}
        // help={!touched[name] ? "" : errors[name]}
        hasFeedback
        label={label}
        className={className}
        
      >
      
        <TagName
            id={name}
            list={name}
            prefix={icon}
            size="large"
            placeholder={placeholder}
            value={status ? values[name] = text : values[name]}
            onChange={handleChange}
            onBlur={handleBlur}
            type={type}
          />
    </Form.Item>
  )
}

FormField.defaultProps = {          
    labelField: '',
    name: '',
    placeholder: '',
}
FormField.defaultProps = {    
    labelField: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
}

export default FormField;
