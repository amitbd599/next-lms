import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import RouteScrollToTop from "./Components/Common/RouteScrollToTop";
import AboutPage from "./Pages/AboutPage";
import BlogDetailsPage from "./Pages/BlogDetailsPage";
import BlogPage from "./Pages/BlogPage";
import CategoryPage from "./Pages/CategoryPage";
import ContactPage from "./Pages/ContactPage";
import CourseAdvisorDetailsPage from "./Pages/CourseAdvisorDetailsPage";
import CourseAdvisorPage from "./Pages/CourseAdvisorPage";
import CourseDetailsPage from "./Pages/CourseDetailsPage";
import CourseGridPage from "./Pages/CourseGridPage";
import CourseListPage from "./Pages/CourseListPage";
import ErrorPage from "./Pages/ErrorPage";
import EventDetailsPage from "./Pages/EventDetailsPage";
import EventPage from "./Pages/EventPage";
import FAQPage from "./Pages/FAQPage";
import GalleryPage from "./Pages/GalleryPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";

function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/course-grid-page" element={<CourseGridPage />} />
        <Route exact path="/course-list-page" element={<CourseListPage />} />
        <Route exact path="/course-details" element={<CourseDetailsPage />} />
        <Route exact path="/blog" element={<BlogPage />} />
        <Route exact path="/blog-details" element={<BlogDetailsPage />} />
        <Route exact path="/course-advisor" element={<CourseAdvisorPage />} />
        <Route
          exact
          path="/course-advisor-details"
          element={<CourseAdvisorDetailsPage />}
        />
        <Route exact path="/event" element={<EventPage />} />
        <Route exact path="/event-details" element={<EventDetailsPage />} />
        <Route exact path="/faq" element={<FAQPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/gallery" element={<GalleryPage />} />
        <Route exact path="/category" element={<CategoryPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/registration" element={<RegistrationPage />} />
        <Route exact path="/error" element={<ErrorPage />} />
      </Routes>
      <ScrollToTop smooth color="#fff" className="scrollToTop" />
    </BrowserRouter>
  );
}

export default App;
