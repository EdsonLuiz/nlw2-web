import React, { TextareaHTMLAttributes} from "react";

import "./styles.css";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string
}

const TextArea: React.FC<TextAreaProps> = (props) => {
  const {label, name, ...rest} = props
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  );
};

export default TextArea
