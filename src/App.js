import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./Components/Home";
import CounsellorList from "./Components/CounsellorList";
import CounsellorDetail from "./Components/CounsellorDetail";
import ReviewForm from "./Components/ReviewForm";
import ResourcesPage from "./Components/ResourcesPage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counsellorList" element={<CounsellorList />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/counsellorDetail/:id" element={<CounsellorDetail />} />
        <Route path="/counsellorDetail/:id/review" element={<ReviewForm />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
