import { useNavigate } from 'react-router-dom';
import '../styles/welcomepage.css';

const WelcomePage = () => {
    const intent = useNavigate();
    return(
        <div className='welcome-page-content'>
            <br/>
            <br/>
            <div className='kidologo'> </div> 
            <h1>Hoş Geldiniz!</h1>
            <p className='content-text'>
            Çocuğunuzu büyütürken artık yalnız değilsiniz!<br/> Hemen kayıt olun Günlük Plan'a erişin!
            </p>
            <div className='sign-up-button-class'>
                <button className='signup-button' onClick = {() =>{ intent('/signuppage') } } >
                    Kayıt Ol
                </button> </div>
                <p className='bottom-content-text'> Zaten hesabın var mı? <a href="/signinpage">  Giriş Yap </a></p>
                <div>
                     <br/>
            </div>            

        </div>
        
    );
}

export default WelcomePage;