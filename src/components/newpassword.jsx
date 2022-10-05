import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/newpassword.css';

const NewPassword = () => {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        password: "",
        activationLink: ""
    });

    const [isButtonActive, setIsButtonActive] = useState(true);

    const inputs = [
        {
            id: 1,
            name: "password",
            type: "password",
            placeholder: " Şifre",
            label: "Password",
            errormessage: "Parola en az 8 karakter en az bir harf ve en az bir sayı içermeli",
            topmessage: "Bir Şifre Belirleyiniz",
            pattern: `^(?=.*[0-9])(?=.*[a-z])([a-z0-9_-]+){8,20}$`,
            required: true
        },
        {
            id: 2,
            name: "passwordagain",
            type: "password",
            placeholder: " Şifre Tekrar",
            label: "Password",
            errormessage: "Şifreler aynı olmalı",
            topmessage: "Bir Şifre Belirleyiniz",
            pattern: values.password,
            required: true
        },
        {
            id: 3,
            name: "activationLink",
            type: "text",
            placeholder: "Link",
            label: "Link",
            topmessage: "Activation Link",
            required: true
        },
    ]

    const [focused, setFocused] = useState(false)

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
        if (values.password === values.passwordagain) {
            setIsButtonActive(false);
        }
        else {
            setIsButtonActive(true);
        }
    }

    const handleFocus = () => {
        setFocused(true);
    }

    const handleClick = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        const response = await fetch('https://testapi.kidokit.com/api/account/activateForgetPassword', requestOptions);
        if (response.status === 200) {
            console.log("şifre değişti");
            navigate('/signinpage');
        }
        else {
            console.log("şifre değişmedi");
        }
    }
    return (
        <div className="content content-new-password">
            <h1 className="header"> Yeni Bir Şifre Belirleyiniz</h1>
            <div className="form">
                <form>
                    <div className="password-fields">
                        <div className="password">
                            <p>{inputs[0].topmessage}</p>
                            <input className="new-password" key={inputs[0]} {...inputs[0]}
                                value={values[inputs[0].name]}
                                onChange={onChange}
                                onBlur={handleFocus}
                                focused={focused.toString()} />
                            <span>{inputs[0].errormessage}</span>
                        </div>
                        <div className="password-2">
                            <p>{inputs[1].topmessage}</p>
                            <input className="new-password" key={inputs[1]} {...inputs[1]}
                                onChange={onChange}
                                onBlur={handleFocus}
                                focused={focused.toString()} />
                            <span>{inputs[1].errormessage}</span>
                        </div>
                        <div className="activation">
                            <p>Activation Link</p>
                            <input className="new-password" key={inputs[2]} {...inputs[2]}
                                onChange={onChange} />
                        </div>
                    </div>
                    <div className="submit">
                        <input type="submit" disabled={isButtonActive} className="new-password-submit" value="Kayıt Ol"
                            onClick={async () => { await delete values.passwordagain; handleClick() && navigate('/signinpage') }} />
                    </div>
                </form>

            </div>
        </div>
    );
}

export default NewPassword;