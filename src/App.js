import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import CourseGridPage from "./Pages/CourseGridPage";
import CourseListPage from "./Pages/CourseListPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/about' element={<AboutPage />} />
        <Route exact path='/course-grid-page' element={<CourseGridPage />} />
        <Route exact path='/course-list-page' element={<CourseListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
