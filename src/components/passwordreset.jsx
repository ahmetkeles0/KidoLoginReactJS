import '../styles/passwordreset.css';
import { useState } from "react";
import './popup.jsx';
import PopUp from './popup.jsx';


const PasswordReset = () => {

    const [success, setSuccess] = useState(true);

    const [buttonState, setButtonState] = useState(true);

    const [popUpState, setPopUpState] = useState(false);

    const [popUpValue, setPopUpValue] = useState("");

    const [popUpMessage, setPopUpMessage] = useState("");

    const [popUpButtonValue, setPopUpButtonValue] = useState("");

    const [values, setValues] = useState({
        email: ""
    });

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "text",
            placeholder: " E-Posta adresiniz",
            label: "E-Mail",
            topmessage: "Şifrenizi sıfırlamak için daha önce Kidokit’e üye olduğunuz e-posta adresinizi yazınız",
            errormessage: "lütfen geçerli bir adres girin",
            required: true
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
        if (values.email.includes("@")) {
            setButtonState(false);
        }
        else {
            setButtonState(true);
        }
    }

    const handleSuccesFalse = () => {
        setSuccess(false);
    }

    const handleSuccesTrue = () => {
        setSuccess(true);
    }

    const resetRequest = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        const response = await fetch('https://testapi.kidokit.com/api/account/forgetPassword', requestOptions);
        if (response.status === 200) {
            setPopUpState(true);
            setPopUpMessage("E Postanızı Kontrol Edin");
            setPopUpValue("Şifrenizi sıfırlamak için gerekli bağlantı " + values.email + " mailinize gönderildi.");
            setPopUpButtonValue("E Posta Uygulamasını Aç")
            return true
        }
        else {
            handleSuccesFalse();
            setPopUpState(true);
            setPopUpMessage("Hata");
            setPopUpValue("E Posta adresinize şifre sıfırlama maili gönderilemedi");
            setPopUpButtonValue("Tekrar E-Posta Gönder")
            return true
        }
    }

    return (
        <div className="password-reset-content">
            <h1 className="header">Şifre Sıfırlama</h1>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                        <p className='top-message'>{inputs[0].topmessage}</p>
                        <input key={inputs[0]} {...inputs[0]}
                            value={values[inputs[0].name]}
                            onChange={onChange} />
                    </div>
                    <br />
                    <div className="submit">
                        <input className='butonprop' style={{backgroundColor: buttonState === true ? "#735EBB" : "" , background: "#735EBB" , opacity: buttonState === true ? "0.4": "",}}  type="submit" value="E-Posta Gönder" disabled={buttonState} onClick={async () => {
                            handleSuccesTrue();
                            values.email && await resetRequest()
                        }} focused={success.toString()} />
                    </div>
                </form>
            </div>
            {popUpState && <PopUp message={popUpMessage} value={popUpValue} buttonValue={popUpButtonValue} />}
        </div>
    );
}

        

 
export default PasswordReset;