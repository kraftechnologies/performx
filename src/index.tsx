import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import { TestimoniesPage } from "./screens/TestimoniesPage/TestimoniesPage";
import { ContactPage } from "./screens/ContactPage/ContactPage";
import { BlogPage } from "./screens/BlogPage/BlogPage";
import { AboutPage } from "./screens/AboutPage/AboutPage";
import Collaboration from "./screens/CollaborationPage/Collaboration";
import Employee from "./screens/EmployeePage/Employee";
import Cloud from "./screens/CloudstoragePage/Cloud";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/testimonies", element: <TestimoniesPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/blog", element: <BlogPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/collaboration", element: <Collaboration /> },
  { path: "/employee-management", element: <Employee /> },
  { path: "/cloud", element: <Cloud /> },
]);

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// ✅ Hide the loader after app is rendered
window.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector(".loader-overlay");
  if (preloader) {
    preloader.style.display = "none";
  }
});
