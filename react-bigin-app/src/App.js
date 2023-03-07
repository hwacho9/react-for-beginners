import { useState, useEffect } from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//Link 는 브라우저 새로고침 없이도 유저를 다른 페이지로 이동 시켜주는 컴포넌트
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
