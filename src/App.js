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
              Take quick snapshots of webpage bugs for easy reporting and
              resolution.
            </p>
            <a
              className="App-link"
              href="https://shriyansh.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Created By: Shriyansh Bhargava
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
