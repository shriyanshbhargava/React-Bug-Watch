import React, { useState } from "react";
import { FloatBug } from "./components/floatBug";
import logo from "./assets/logo.png";
import "./App.css";
import CaptureScreen from "./components/captureScreen";
import ScreenCapture from "./components/ScreenCapture";

function App() {
  const [screenCapture, setScreenCapture] = useState();
  const [openPreview, setOpenPreview] = useState(false);
  const [captureButtonVisible, setCaptureButtonVisible] = useState(false);

  const handleScreenCapture = (screenCapture) => {
    setScreenCapture(screenCapture);
    setOpenPreview(true);
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
            captureButtonVisible={captureButtonVisible}
            setCaptureButtonVisible={setCaptureButtonVisible}
          />
          <CaptureScreen
            onStartCapture={onStartCapture}
            screenCapture={screenCapture}
            handleScreenCapture={handleScreenCapture}
            setOpenPreview={setOpenPreview}
            openPreview={openPreview}
            captureButtonVisible={captureButtonVisible}
            setCaptureButtonVisible={setCaptureButtonVisible}
            setScreenCapture={setScreenCapture}
          />
        </div>
      )}
    </ScreenCapture>
  );
}

export default App;
