import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from "./components/welcomepage";
import SignInPage from './components/signinpage';
import SignUpPage from './components/signuppage';
import PasswordReset from './components/passwordreset';
import PopUp from './components/popup';
import NewPassword from './components/newpassword';


function App() {
    return (
      <Router>
        <div className="Appclass">
          <div className="routerclass">
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path='/signinpage' element={<SignInPage />} />
              <Route path='/signuppage' element={<SignUpPage />} />
              <Route path='/passwordreset' element={<PasswordReset />} />
              <Route path='/newpassword' element={<NewPassword />} />

              <Route path='/popup' element={<PopUp />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
  
  export default App;