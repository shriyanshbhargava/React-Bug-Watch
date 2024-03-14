import React, { useRef, useState } from "react";
import {
  MdClear,
  MdLockReset,
  MdRedo,
  MdUndo,
  MdZoomIn,
  MdZoomOut,
} from "react-icons/md";
import { TbEraser, TbPencil } from "react-icons/tb";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

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

  const imgSrc = screenCapture ? screenCapture : image;
  //   const imgAspectRatio = screenCapture ? "xMidYMid meet" : "xMaxYMid meet";

  return (
    <div className="flex flex-col gap-2 p-2 items-start">
      <TransformWrapper>
        <TransformComponent>
          <ReactSketchCanvas
            ref={canvasRef}
            backgroundImage={imgSrc}
            width="700px"
            height="400px"
            panning={{ disabled: "false"}}

            // preserveBackgroundImageAspectRatio={imgAspectRatio}
            // exportWithBackgroundImage={true}
          />
        </TransformComponent>
      </TransformWrapper>

      <div className="flex w-10 ml-32">
        <button
          title="Pencil"
          className="p-2 rounded-xl border cursor-pointer dark:border-accent-900 dark:text-accent-200 bg-accent-600 text-accent-50 hover:bg-accent-600 hover:text-accent-50"
          type="button"
          aria-label="pencil"
          disabled={!eraseMode}
          onClick={handlePenClick}
        >
          <TbPencil size={24} />
        </button>
        <button
          title="Pencil"
          className="p-2 rounded-xl border cursor-pointer dark:border-accent-900 dark:text-accent-200 bg-accent-600 text-accent-50 hover:bg-accent-600 hover:text-accent-50"
          type="button"
          aria-label="pencil"
          disabled={eraseMode}
          onClick={handleEraserClick}
        >
          <TbEraser size={24} />
        </button>
        <button
          title="Pencil"
          className="p-2 rounded-xl border cursor-pointer dark:border-accent-900 dark:text-accent-200 bg-accent-600 text-accent-50 hover:bg-accent-600 hover:text-accent-50"
          type="button"
          aria-label="pencil"
          onClick={handleUndoClick}
        >
          <MdUndo size={24} />
        </button>{" "}
        <button
          title="Pencil"
          className="p-2 rounded-xl border cursor-pointer dark:border-accent-900 dark:text-accent-200 bg-accent-600 text-accent-50 hover:bg-accent-600 hover:text-accent-50"
          type="button"
          aria-label="pencil"
          onClick={handleRedoClick}
        >
          <MdRedo size={24} />
        </button>{" "}
        <button
          title="Pencil"
          className="p-2 rounded-xl border cursor-pointer dark:border-accent-900 dark:text-accent-200 bg-accent-600 text-accent-50 hover:bg-accent-600 hover:text-accent-50"
          type="button"
          aria-label="pencil"
          onClick={handleClearClick}
        >
          <MdClear size={24} />
        </button>{" "}
        <button
          title="Pencil"
          className="p-2 rounded-xl border cursor-pointer dark:border-accent-900 dark:text-accent-200 bg-accent-600 text-accent-50 hover:bg-accent-600 hover:text-accent-50"
          type="button"
          aria-label="pencil"
          onClick={handleResetClick}
        >
          <MdLockReset size={24} />
        </button>
        <button
          title="Pencil"
          className="p-2 rounded-xl border cursor-pointer dark:border-accent-900 dark:text-accent-200 bg-accent-600 text-accent-50 hover:bg-accent-600 hover:text-accent-50"
          type="button"
          aria-label="pencil"
          disabled={!eraseMode}
          onClick={handlePenClick}
        >
          <MdZoomIn size={24} />
        </button>
        <button
          title="Pencil"
          className="p-2 rounded-xl border cursor-pointer dark:border-accent-900 dark:text-accent-200 bg-accent-600 text-accent-50 hover:bg-accent-600 hover:text-accent-50"
          type="button"
          aria-label="pencil"
          onClick={handlePenClick}
        >
          <MdZoomOut size={24} />
        </button>
      </div>
    </div>
  );
}
