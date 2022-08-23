import { useNavigate } from 'react-router-dom';
import '../styles/popup.css';
import logo1 from '../assets/warninglogo2.png'
import logo2 from '../assets/oklogo.png';


const PopUp = (props) => {

    const navigate = useNavigate();

    const message = props.message;

    const value = props.value;

    const buttonValue = props.buttonValue

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div className='pop-up-content'>
            <div className="inner">
                {message === "Hata" && <img src={logo1} alt="vector1" />}
                {message === "E Postanızı Kontrol Edin" && <img src={logo2} alt="vector2" />}
                < h1 style={{ color: message === "Hata" ? "#EC4F4F" : "#3CD77A" }} > {message}</h1>
                <p>{value}</p>
                <div className="submit">
                    <input type="submit" value={buttonValue} onClick={message === "Hata" ? refreshPage : () => navigate('/newpassword')} />
                </div>
            </div>
        </div >
    );
}

export default PopUp;