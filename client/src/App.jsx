import { Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import ProfileDisplay from "./components/ProfileDisplay";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/userprofile" element={<ProfileDisplay />} />
    </Routes>
  );
};

export default App;
