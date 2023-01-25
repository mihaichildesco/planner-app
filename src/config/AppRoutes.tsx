import { Route, Routes } from "react-router-dom";
import HomePage from "../views/HomePage/HomePage";
import LoginPage from "../views/LoginPage/LoginPage";
import ProjectsPage from "../views/ProjectsPage/ProjectsPage";
import PersonsPage from "../views/PersonsPage/PersonsPage";
import RegisterPage from "../views/RegisterPage/RegisterPage";
import Layout from "../components/Layout/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/projects"
        element={
          <Layout>
            <ProjectsPage />
          </Layout>
        }
      />
      <Route
        path="/persons"
        element={
          <Layout>
            <PersonsPage />
          </Layout>
        }
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
