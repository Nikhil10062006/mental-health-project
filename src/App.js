// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"; // your existing Home
import CounsellorList from "./Components/CounsellorList";
import ResourcesPage from "./Components/ResourcesPage";
import CounsellorDetail from "./Components/CounsellorDetail";
import ChatRoom from "./Components/ChatRoom";
import ReviewForm from "./Components/ReviewForm";
import Login from "./Components/Login";
import { AuthProvider } from "./Context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/counsellorList" element={<CounsellorList />} />
          <Route path="/counsellorDetail/:id" element={<CounsellorDetail />} />
          <Route
            path="/chatroom"
            element={
              <ProtectedRoute>
                <ChatRoom />
              </ProtectedRoute>
            }
          />
          <Route
            path="/counsellorDetail/:id/review"
            element={
              <ProtectedRoute>
                <ReviewForm />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
