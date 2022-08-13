import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from "./components/welcomepage";
import SignInPage from './components/signinpage';
import SignUpPage from './components/signuppage';


function App() {
    return (
      <Router>
        <div className="Appclass">
          <div className="routerclass">
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path='/signinpage' element={<SignInPage />} />
              <Route path='/signuppage' element={<SignUpPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
  
  export default App;