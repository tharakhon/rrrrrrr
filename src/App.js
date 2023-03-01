import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SuccessPage from './loadSuccess';
// import SelectLabels from './SeleteDrop';
// import CheckBug from './CheckBug';
// import Bank from './page/Bank';
// import React from 'react';
// import App from './App';
import MainPage from '../src/page/mainPage';
import PageTwo from './page/PageTwo';
// import MapContainer from "./MapContainer";
function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />}>
            {/* <Route index element={<Home />} /> */}
            <Route path="/page2" element={<PageTwo/>} />
            {/* <Route path="/page3" element={<App />} />
            <Route path="/page4" element={<Bank />} />
            <Route path="/page4" element={<SelectLabels />} />
            <Route path="/page4" element={<SuccessPage />} /> */}
          </Route>
        </Routes>
  </BrowserRouter>
  );
  }
export default App;
