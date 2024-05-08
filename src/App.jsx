import { useState } from 'react';
import './App.css';
import BlogDetail from './components/blogs/BlogDetail';
import About from './views/About';
import LandingPage from './views/LandingPage';
import PrivacyPolicy from './views/PrivacyPolicy';
import Terms from './views/Terms';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

  const [showEnquiry, setShowEnquiry] = useState(false);

  const toggleEnquiry = () => {
    setShowEnquiry(!showEnquiry);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/blog/:id" element={<BlogDetail toggleEnquiry={toggleEnquiry}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
