import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import '../styles/signuppage.css';

const SignUpPage = () => {

    const intent = useNavigate();

    const [values, setValues] = useState({
        fullName: "",
        email: "",
        password: "",
        childName: "",
        childBirthday: "",
        childGender: "",
    });

    const inputs = [

        {
            id: 1,
            name: "fullName",
            type: "text",
            placeholder: " İsim ve Soyisim",
            label: "name",
            errormessage: "İsim alanı boş bırakılamaz",
            topmessage: "Adınız ve Soyadınız ",
            required: true
        },
        {
            id: 2,
            name: "email",
            type: "text",
            placeholder: " E-Posta",
            label: "E-Mail",
            errormessage: "E posta alanı boş bırakılamaz",
            topmessage: "E posta adresinizi yazınız",
            required: true
        },
        {
            id: 3,
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
            id: 4,
            name: "passwordagain",
            type: "password",
            placeholder: " Şifre Tekrar",
            label: "Password",
            errormessage: "Şifreler aynı olmalı",
            topmessage: "Şifrenizi Onaylayın",
            pattern: values.password,
            required: true
        },
        {
            id: 5,
            name: "childName",
            type: "text",
            placeholder: " Çocuğun ismi",
            label: "childname",
            errormessage: "Bu alan boş bırakılamaz",
            topmessage: "Çocuğun ismi",
            required: true
        },
        {
            id: 6,
            name: "childBirthday",
            type: "date",
            placeholder: "",
            label: "childbirth",
            errormessage: "Çocuğun doğum tarihi alanı boş bırakılamaz",
            topmessage: "Çocuğun doğum tarihi",
            required: true
        },
    ]

    const [focused, setFocused] = useState(false)

    const [radioValue, setRadioValue] = useState();

    const [checked, setChecked] = useState(false);

    const [checkedPolicy, setCheckedPolicy] = useState(false);

    const radios = [
        { name: 'Erkek', value: '0' },
        { name: 'Kız', value: '1' },
    ];


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleFocus = () => {
        setFocused(true);
    }

    const checkButton = () => {
        setChecked(true);
    }

    const checkPolicy = () => {
        setCheckedPolicy(true);
    }

    const signUpRequest = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        const response = await fetch('https://testapi.kidokit.com/api/account/v2/register', requestOptions);
        const data = await response.json();
        if (data.accessToken != null) {
            console.log("Kayıt başarılı");
            console.log("Token:  " + data.accessToken);
            return true
        }
        else {
            console.log(data.errorMessage)
            return false
        }
    }

    return (
        <div>
            <div className="sign-up-content">
                <h1 className="signupheader">Kayıt Olun</h1>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className="item-1">
                                <div className="name">
                                    <p>{inputs[0].topmessage}</p>
                                    <input key={inputs[0]} {...inputs[0]}
                                        value={values[inputs[0].name]}
                                        onChange={onChange}
                                        onBlur={handleFocus}
                                        focused={focused.toString()} />
                                    <br />
                                </div>
                                <div className="mail">
                                    <p>{inputs[1].topmessage}</p>
                                    <input key={inputs[1]} {...inputs[1]}
                                        value={values[inputs[1].name]}
                                        onChange={onChange}
                                        onBlur={handleFocus}
                                        focused={focused.toString()} />
                                    <br />
                                    <span>{inputs[1].errormessage}</span>
                                    <br />
                                </div>
                            </div>
                            <div className="item-2">
                                <div className="password">
                                    <p>{inputs[2].topmessage}</p>
                                    <input key={inputs[2]} {...inputs[2]}
                                        value={values[inputs[2].name]}
                                        onChange={onChange}
                                        onBlur={handleFocus}
                                        focused={focused.toString()} />
                                    <br />
                                    <span>{inputs[2].errormessage}</span>
                                </div>
                                <div className="password-2">
                                    <p>{inputs[3].topmessage}</p>
                                    <input key={inputs[3]} {...inputs[3]}
                                        onChange={onChange}
                                        onBlur={handleFocus}
                                        focused={focused.toString()} />
                                    <br />
                                    <span>{inputs[3].errormessage}</span>
                                    <br />
                                </div>
                            </div>
                            <div className="item-3">
                                <div className="child-name">
                                    <p>{inputs[4].topmessage}</p>
                                    <input key={inputs[4]} {...inputs[4]}
                                        value={values[inputs[4].name]}
                                        onChange={onChange}
                                        onBlur={handleFocus}
                                        focused={focused.toString()} />
                                    <br />
                                    <span>{inputs[4].errormessage}</span>
                                </div>
                                <div className="child-birth">
                                    <p>{inputs[5].topmessage}</p>
                                    <input key={inputs[5]} {...inputs[5]}
                                        value={values[inputs[5].name]}
                                        onChange={onChange}
                                        onBlur={handleFocus}
                                        focused={focused.toString()} />
                                    <br />
                                    <span>{inputs[5].errormessage}</span>
                                    <br />
                                </div>
                            </div>
                            <div className="item-4">
                                <div className="child-gender">
                                    <p>Çocuğunuzun cinsiyeti</p>
                                    <div className="buttons">
                                        <ButtonGroup>
                                            {radios.map((radio, idx) => (
                                                <ToggleButton className='toggle-buttons'
                                                    key={idx}
                                                    id={`radio-${idx}`}
                                                    type="radio"
                                                    variant={idx % 2 ? 'outline-secondary' : 'outline-secondary'}
                                                    name="radio"
                                                    value={radio.value}
                                                    checked={radioValue === radio.value}
                                                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                                                    onClick={checkButton}
                                                    onBlur={handleFocus}
                                                    focused={focused.toString()}
                                                >
                                                    {radio.name}
                                                </ToggleButton>
                                            ))}
                                        </ButtonGroup>
                                    </div>
                                </div>
                                <div className="message">
                                    <div className='warning-logo'></div>
                                    <p className="text" >&nbsp; Kayıt sonrası yeni çocuk oluşturabilirsiniz</p>
                                </div>
                            </div>
                            <div className="item-5">
                                <div className="checkbox">
                                    <input className='checkbox-button' type="checkbox" 
                                        onClick={checkPolicy} />
                                </div>
                                <div className="policy">
                                    <p className="policy-text">Kullanım Koşullarını ve Gizlilik Sözleşmesini </p>
                                    <p className='policy-text-2'> okudum ve onaylıyorum</p>
                                </div>
                            </div>
                        </div>
                        <div className="submit">
                            <input type="submit" value="Kayıt Ol" onClick={async () => {
                                delete values.passwordagain;
                                values.childGender = radioValue;
                                console.log(values);
                                values.fullName && values.email && values.password &&
                                    values.childName && values.childBirthday && checked && checkedPolicy && 
                                    await signUpRequest() && intent('/signinpage')
                            }} />
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
}

export default SignUpPage;