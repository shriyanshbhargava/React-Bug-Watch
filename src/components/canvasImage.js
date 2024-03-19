import React, { useRef, useState } from "react";
import { MdClear, MdLockReset, MdRedo, MdUndo } from "react-icons/md";
import { TbEraser, TbMinus, TbPencil, TbPlus } from "react-icons/tb";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export default function CanvasImage({ image, screenCapture }) {
  const canvasRef = useRef(null);
  const [eraseMode, setEraseMode] = useState(false);

  const handleEraserClick = () => setEraseMode(true);
  canvasRef.current?.eraseMode(true);

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

  return (
    <div className="flex flex-col gap-2 p-2 items-start ">
      <TransformWrapper
        panning={{
          disabled: false,
          wheelPanning: false,
          lockAxisX: true,
          lockAxisY: true,
        }}
        pinch={{ disabled: false, wheelPanning: false }}
      >
        {({ zoomIn, zoomOut, ...rest }) => (
          <React.Fragment>
            <TransformComponent>
              <ReactSketchCanvas
                ref={canvasRef}
                backgroundImage={imgSrc}
                width="800px"
                height="400px"
              />
            </TransformComponent>
            <div className="inline-flex w-10 ml-56 pt-5 tools">
              <button
                title="Pencil"
                className="p-2 rounded-xl border cursor-pointer dark:border-accent-900 dark:text-accent-200 bg-accent-600 text-accent-50 hover:bg-accent-600 hover:text-accent-50"
                type="button"
                aria-label="pencil"
                // disabled={!eraseMode}
                onClick={handlePenClick}
              >
                <TbPencil size={24} />
              </button>
              <button
                title="Eraser"
                className="p-2 rounded-xl border cursor-pointer dark:border-accent-900 dark:text-accent-200 bg-accent-600 text-accent-50 hover:bg-accent-600 hover:text-accent-50"
                type="button"
                aria-label="Eraser"
                // disabled={eraseMode}
                onClick={handleEraserClick}
              >
                <TbEraser size={24} />
              </button>
              <button
                title="Undo"
                className="p-2 rounded-xl border cursor-pointer dark:border-accent-900 dark:text-accent-200 bg-accent-600 text-accent-50 hover:bg-accent-600 hover:text-accent-50"
                type="button"
                aria-label="undo"
                onClick={handleUndoClick}
              >
                <MdUndo size={24} />
              </button>{" "}
              <button
                title="Redo"
                className="p-2 rounded-xl border cursor-pointer dark:border-accent-900 dark:text-accent-200 bg-accent-600 text-accent-50 hover:bg-accent-600 hover:text-accent-50"
                type="button"
                aria-label="redo"
                onClick={handleRedoClick}
              >
                <MdRedo size={24} />
              </button>{" "}
              <button
                title="Clear"
                className="p-2 rounded-xl border cursor-pointer dark:border-accent-900 dark:text-accent-200 bg-accent-600 text-accent-50 hover:bg-accent-600 hover:text-accent-50"
                type="button"
                aria-label="clear"
                onClick={handleClearClick}
              >
                <MdClear size={24} />
              </button>{" "}
              <button
                title="Reset"
                className="p-2 rounded-xl border cursor-pointer dark:border-accent-900 dark:text-accent-200 bg-accent-600 text-accent-50 hover:bg-accent-600 hover:text-accent-50"
                type="button"
                aria-label="reset"
                onClick={handleResetClick}
              >
                <MdLockReset size={24} />
              </button>
              <button
                title="ZoomIn"
                className="p-2 rounded-xl border cursor-pointer dark:border-accent-900 dark:text-accent-200 bg-accent-600 text-accent-50 hover:bg-accent-600 hover:text-accent-50"
                type="button"
                aria-label="zoomin"
                onClick={() => zoomIn()}
              >
                <TbPlus size={24} />
              </button>
              <button
                title="ZoomOut"
                className="p-2 rounded-xl border cursor-pointer dark:border-accent-900 dark:text-accent-200 bg-accent-600 text-accent-50 hover:bg-accent-600 hover:text-accent-50"
                type="button"
                aria-label="zoomout"
                onClick={() => zoomOut()}
              >
                <TbMinus size={24} />
              </button>
              {/* <button
                title="RotateClockwise"
                className="p-2 rounded-xl border cursor-pointer dark:border-accent-900 dark:text-accent-200 bg-accent-600 text-accent-50 hover:bg-accent-600 hover:text-accent-50"
                type="button"
                aria-label="rotateClockwise"
                onClick={rotateBox}
              >
                <TbRotateClockwise size={24} />
              </button>
              <button
                title="RotateAntiClockwise"
                className="p-2 rounded-xl border cursor-pointer dark:border-accent-900 dark:text-accent-200 bg-accent-600 text-accent-50 hover:bg-accent-600 hover:text-accent-50"
                type="button"
                aria-label="rotateAntiClockwise2"
                onClick={() => handleRotateAntiClockwise()}
              >
                <TbRotateClockwise2 size={24} />
              </button> */}
            </div>
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  );
}
