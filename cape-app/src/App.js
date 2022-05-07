import "./App.css";
import { Header } from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Home } from "./MyComponents/Home";
import { Services } from "./MyComponents/Services";
import { About } from "./MyComponents/About";
import { Contact } from "./MyComponents/Contact";
import { Login } from "./MyComponents/Login";
import { Register } from "./MyComponents/Register";
import { Contests } from "./MyComponents/Contests";
import { ForgotPass } from "./MyComponents/ForgotPass";
import { NewsFeed } from "./MyComponents/NewsFeed";
import { PrivacyPolicy } from "./MyComponents/PrivacyPolicy";
import { MyDashboard } from "./MyComponents/MyDashboard";
import { Routes, Route } from "react-router-dom";



function App() {
  localStorage.setItem("show", false);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header title="CAPE" />
            <Home />
            <Services />
            <Footer />
          </>
        }
      />

      <Route
        path="about"
        element={
          <>
            <Header title="CAPE" />
            <About />
            <Footer />
          </>
        }
      />

      <Route
        path="contact"
        element={
          <>
            <Header title="CAPE" />
            <Contact />
            <Footer />
          </>
        }
      />

      <Route
        path="login"
        element={
          <>
            <Header title="CAPE" />
            <Login />
            <Footer />
          </>
        }
      />
      <Route
        path="register"
        element={
          <>
            <Header title="CAPE" />
            <Register />
            <Footer />
          </>
        }
      />

      <Route
        path="contest"
        element={
          <>
            <Header title="CAPE" />
            <Contests />
            <Footer />
          </>
        }
      />

      <Route
        path="forgotpass"
        element={
          <>
            <Header title="CAPE" />
            <ForgotPass />
            <Footer />
          </>
        }
      />

      <Route
        path="services"
        element={
          <>
            <Header title="CAPE" />
            <Services />
            <Footer />
          </>
        }
      />

      <Route
        path="news"
        element={
          <>
            <Header title="CAPE" />
            <NewsFeed />
            <Footer />
          </>
        }
      />

      <Route
        path="privacy"
        element={
          <>
            <Header title="CAPE" />
            <PrivacyPolicy />
            <Footer />
          </>
        }
      />

<Route
        path="dashboard"
        element={
          <>
            <Header title="CAPE" />
            <MyDashboard />
            <Footer />
          </>
        }
      />
      
    </Routes>
  );
}

export default App;
