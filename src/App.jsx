import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Screen1UPF from "./pages/Screen1UPF";
import LoginUser from "./pages/LoginUser";
import Screen5UPF from "./pages/Screen5UPF";
import Screen2UPF from "./pages/Screen2UPF";
import Screen6UPF from "./pages/Screen6UPF";
import Screen3UPF from "./pages/Screen3UPF";
import Screen4UPF from "./pages/Screen4UPF";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login-user":
        title = "";
        metaDescription = "";
        break;
      case "/screen-5-upf":
        title = "";
        metaDescription = "";
        break;
      case "/screen-2-upf":
        title = "";
        metaDescription = "";
        break;
      case "/screen-6-upf":
        title = "";
        metaDescription = "";
        break;
      case "/screen-3-upf":
        title = "";
        metaDescription = "";
        break;
      case "/screen-4-upf":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Screen1UPF />} />
      <Route path="/login-user" element={<LoginUser />} />
      <Route path="/screen-5-upf" element={<Screen5UPF />} />
      <Route path="/screen-2-upf" element={<Screen2UPF />} />
      <Route path="/screen-6-upf" element={<Screen6UPF />} />
      <Route path="/screen-3-upf" element={<Screen3UPF />} />
      <Route path="/screen-4-upf" element={<Screen4UPF />} />
    </Routes>
  );
}
export default App;
