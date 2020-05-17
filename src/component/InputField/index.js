import React, {useEffect, useState} from 'react';
import './style.scss';
const Input = ({register, name, label, type, errors, valid}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [currentText, setCurrentText] = useState('');
  return (
    <div className={isFocused ? 'input-container focus' : 'input-container'}>
      <div className="input-icon">
        {name === 'email' ? (
          <i className="fa fas fa-user"></i>
        ) : (
          <i className="fa fas fa-lock"></i>
        )}
      </div>
      <div className="input-field">
        <h5>{label}</h5>
        <input
          type={type}
          name={name}
          className="input"
          ref={valid || register({required: `${label} is required`})}
          onChange={(e) => setCurrentText(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            !currentText && setIsFocused(false);
          }}
        />
        {errors[name] && <span>{errors[name].message}</span>}
      </div>
    </div>
  );
};

export default Input;
