import { Button } from "antd";
import React, { useRef, useState } from "react";
import { TbPencil } from "react-icons/tb";
import { ReactSketchCanvas } from "react-sketch-canvas";

export default function CanvasImage({ image, screenCapture }) {
  const canvasRef = useRef(null);
  const [eraseMode, setEraseMode] = useState(false);

  const handleEraserClick = () => {
    setEraseMode(true);
    canvasRef.current?.eraseMode(true);
  };

  const handlePenClick = () => {
    setEraseMode(false);
    canvasRef.current?.eraseMode(false);
  };

  const handleUndoClick = () => {
    canvasRef.current?.undo();
  };

  const handleRedoClick = () => {
    canvasRef.current?.redo();
  };

  const handleClearClick = () => {
    canvasRef.current?.clearCanvas();
  };

  const handleResetClick = () => {
    canvasRef.current?.resetCanvas();
  };

  return (
    <div className="flex flex-col gap-2 p-2">
      <ReactSketchCanvas
        ref={canvasRef}
        backgroundImage={screenCapture ? screenCapture : image}
      />
      <h1>Tools</h1>
      <div className="d-flex gap-2 align-items-center">
        <div className="d-flex gap-2 align-items-center">
          <Button
            type="default"
            shape="circle"
            disabled={!eraseMode}
            onClick={handlePenClick}
          >
            <TbPencil color="black" />
          </Button>
          <Button
            type="primary"
            shape="circle"
            disabled={eraseMode}
            onClick={handleEraserClick}
          >
            Eraser
          </Button>
          <div className="vr" />
          <Button type="primary" shape="circle" onClick={handleUndoClick}>
            Undo
          </Button>
          <Button type="primary" shape="circle" onClick={handleRedoClick}>
            Redo
          </Button>
          <Button type="primary" shape="circle" onClick={handleClearClick}>
            Clear
          </Button>
          <Button type="primary" shape="circle" onClick={handleResetClick}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
