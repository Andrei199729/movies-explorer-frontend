import React from "react";
import FormAuthentication from "../FormAuthentication/FormAuthentication";

function Login() {
    return (
        <>
            <FormAuthentication
                btn='Войти'
                paragraphLink='Ещё не зарегистрированы?'
                to='/signup'
                linkText='Регистрация'
                formName='formlogin'
                title='Рады видеть!'
            >
                <label className="form-authentication__label" htmlFor="emaillogin">E-mail</label>
                <input
                    className="form-authentication__input"
                    id="emaillogin"
                    type="email"
                    name="email"
                    minLength="2"
                    maxLength="40"
                    required
                />
                <label className="form-authentication__label" htmlFor="passwordregister">Пароль</label>
                <input
                    className="form-authentication__input"
                    id="passwordregister"
                    type="password"
                    name="password"
                    minLength="6"
                    maxLength="200"
                    required
                />
            </FormAuthentication>
        </>
    );
}

export default Login;