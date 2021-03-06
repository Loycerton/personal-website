import React, {useContext} from "react";
import './Button.style.css';
import ThemeContext from "../../../../contexts/theme/ThemeContext";

const Button = ({onClick, disabled = false, style, children, block = false}) => {
    const themeContext =  useContext(ThemeContext);
    const {darkMode} = themeContext;

    return (
        <button
            style={style}
            className={`button ${block && 'button-block'} ${darkMode && 'button-dark'}`}
            onClick={onClick}
            disabled={disabled}>
            {children}
        </button>
    )
};

export default Button;