import React from "react";
import FormAuthentication from "../FormAuthentication/FormAuthentication";

function Register() {
    return (
        <>
            <FormAuthentication
                btn='Зарегистрироваться'
                paragraphLink='Уже зарегистрированы?'
                to='/signin'
                linkText='Войти'
                formName='formregister'
                title='Добро пожаловать!'
            >
                <label className="form-authentication__label" htmlFor="nameregister">name</label>
                <input
                    className="form-authentication__input"
                    id="nameregister"
                    type="text"
                    name="name"
                    minLength="2"
                    maxLength="40"
                    required
                />
                <label className="form-authentication__label" htmlFor="emailregister">E-mail</label>
                <input
                    className="form-authentication__input"
                    id="emailregister"
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

export default Register;