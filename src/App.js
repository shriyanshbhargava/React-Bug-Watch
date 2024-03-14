import React, { useState } from "react";
import { ScreenCapture } from "react-screen-capture";
import { FloatBug } from "./components/floatBug";
import logo from "./assets/logo.png";
import "./App.css";
import CaptureScreen from "./components/captureScreen";
import TaskForm from "./components/taskForm";

function App() {
  const [screenCapture, setScreenCapture] = useState();
  const [open, setOpen] = useState(false);

  const handleScreenCapture = (screenCapture) => {
    setScreenCapture(screenCapture);
    setOpen(true);
  };

  const handleSave = () => {
    const downloadLink = document.createElement("a");
    const fileName = "react-screen-capture.png";

    downloadLink.href = screenCapture;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  return (
    <ScreenCapture onEndCapture={handleScreenCapture}>
      {({ onStartCapture }) => (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <FloatBug
            handleScreenCapture={handleScreenCapture}
            setOpen={setOpen}
            open={open}
          />
          <CaptureScreen
            onStartCapture={onStartCapture}
            screenCapture={screenCapture}
            handleScreenCapture={handleScreenCapture}
            setOpen={setOpen}
            open={open}
          />
          <TaskForm setOpen={setOpen} open={open} />
          {/* <center>
            <img src={screenCapture} alt="react-screen-capture" />
            <p>
              {screenCapture && <button onClick={handleSave}>Download</button>}
            </p>
          </center> */}
        </div>
      )}
    </ScreenCapture>
  );
}

export default App;
