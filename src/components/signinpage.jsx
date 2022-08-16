import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import '../styles/signinpage.css';

const SignInPage = () => {

    const intent = useNavigate();

    const [success, setSuccess] = useState(true);

    var x=5;

    const [values, setValues] = useState({
        username: "",
        password: ""
    });

    console.log(values.username)

    const [focused, setFocused] = useState(false)

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: " E-Posta",
            label: "E-Mail",
            topmessage: "E posta adresinizi yazınız",
            required: true
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: " Şifre",
            label: "Password",
            topmessage: "Şifrenizi Giriniz",
            required: true
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleFocus = () => {
        setFocused(true);
    }

    const handleSuccesFalse = () => {
        setSuccess(false);
    }

    const handleSuccesTrue = () => {
        setSuccess(true);
    }

    const signInRequest = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        const response = await fetch('https://testapi.kidokit.com/api/account/login', requestOptions);
        const data = await response.json();
        if (data.idToken != null) {
            console.log("Giriş başarılı")
            return true
        }
        else {
            handleSuccesFalse();
            console.log(data.errorMessage)
            return false
        }
    }

    return (
        <div className="sign-in-content">
            <h1 className="header"> Giriş Yap</h1>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                        {inputs.map((input) => (
                            <div>
                                <p>{input.topmessage} </p>
                                <input key={input.id} {...input}
                                    value={values[input.name]}
                                    onChange={onChange}
                                    onBlur={handleFocus}
                                    focused={focused.toString()}
                                />
                                <br />
                                <br />
                            </div>
                        ))}
                    </div>
                    <br />
                    <div className="link">
                        <a href="/reset-password">Şifremi Unuttum</a>
                    </div>
                    <br />
                    <div className="submit">
                        <input type="submit" value="Giriş Yap" onClick={async () => {
                            handleSuccesTrue();
                            values.password && values.username && await signInRequest() && intent('/catalog')
                        }} focused={success.toString()} />
                        <span>Kullanıcı adı veya şifre hatalı</span>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default SignInPage;