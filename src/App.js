import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import BlogDetailsPage from "./Pages/BlogDetailsPage";
import BlogPage from "./Pages/BlogPage";
import CourseAdvisorPage from "./Pages/CourseAdvisorPage";
import CourseDetailsPage from "./Pages/CourseDetailsPage";
import CourseGridPage from "./Pages/CourseGridPage";
import CourseListPage from "./Pages/CourseListPage";
import EventDetailsPage from "./Pages/EventDetailsPage";
import EventPage from "./Pages/EventPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/about' element={<AboutPage />} />
        <Route exact path='/course-grid-page' element={<CourseGridPage />} />
        <Route exact path='/course-list-page' element={<CourseListPage />} />
        <Route exact path='/course-details' element={<CourseDetailsPage />} />
        <Route exact path='/blog' element={<BlogPage />} />
        <Route exact path='/blog-details' element={<BlogDetailsPage />} />
        <Route exact path='/course-advisor' element={<CourseAdvisorPage />} />
        <Route exact path='/event' element={<EventPage />} />
        <Route exact path='/event-details' element={<EventDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
