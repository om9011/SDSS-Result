import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'; 
import HomePage from "./Pages/HomePage"
import SearchResultPage from './Components/SearchResultPage'; 
import AnalysisPage from './Pages/AnalysisPage'; 
import NotFoundPage from './Pages/NotFoundPage';
import Footer from './Components/Footer';

const App = () => {
    return (
        <Router>
            <div>   
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} /> {/* Route for RollNumberInputPage */}
                    <Route path="/result/:rollNumber" element={<SearchResultPage />} /> {/* Route for SearchResultPage */}
                    <Route path="/analysis" element={<AnalysisPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
