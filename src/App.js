import React from "react";
import { Counter } from "./components/counter/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CourseDetail from "./components/CourseDetail";
import EventsDetail from "./components/EventsDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="body flex items-center justify-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="courses/:courseId" element={<CourseDetail />} />
            <Route path="events/:eventsId" element={<EventsDetail />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </BrowserRouter>
      </div>

      <Footer />
    </div>
  );
}

export default App;
