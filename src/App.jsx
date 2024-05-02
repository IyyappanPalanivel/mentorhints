import './App.css';
import LandingPage from './views/LandingPage';
import PrivacyPolicy from './views/PrivacyPolicy';
import Terms from './views/Terms';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}>
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
