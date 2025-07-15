import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Loading from "./pages/Loading/Loading";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Error404 = lazy(() => import("./pages/Errors/Error404"));
const Documentation = lazy(() => import("./pages/Documentation/Documentation"));
const Student = lazy(() => import("./pages/Student/Student"));
const Instructor = lazy(() => import("./pages/Instructor/Instructor"));
const Instructors = lazy(() => import("./pages/Instructors/Instructors"));
const Course = lazy(() => import("./pages/Course/Course"));
const Project = lazy(() => import("./pages/Project/Project"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route caseSensitive={false} path="/about" element={<About />} />
          <Route
            caseSensitive={false}
            path="/documentation"
            element={<Documentation />}
          />

          <Route
            caseSensitive={false}
            path="/student/:sNumber"
            element={<Student />}
          />
          <Route
            caseSensitive={false}
            path="/instructor/:instructorUsername"
            element={<Instructor />}
          />
          <Route
            caseSensitive={false}
            path="/instructors"
            element={<Instructors />}
          />
          <Route
            caseSensitive={false}
            path="/course/:courseId"
            element={<Course />}
          />
          <Route
            caseSensitive={false}
            path="/project/id/:projectId/n/:projectName"
            element={<Project />}
          />
          <Route
            caseSensitive={false}
            path="/project/id/:projectId"
            element={<Project />}
          />

          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
