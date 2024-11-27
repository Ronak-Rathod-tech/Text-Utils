import About from "./components/About";
import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    // console.log(cls);
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#032c54";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}>
              {/* <About /> */}
            </Route>
            <Route
              exact
              path="/"
              element={
                <TextForm heading="Enter the text to analyze" mode={mode} />
              }
            ></Route>
            {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
