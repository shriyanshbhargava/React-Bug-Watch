import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useScreenshot } from "use-screenshot-hook";
import { MdCancel, MdFullscreen, MdOutlineCancel } from "react-icons/md";
import { TbCrosshair, TbUserCancel, TbZoomInArea } from "react-icons/tb";
import TaskForm from "./taskForm";

function CaptureScreen({
  onStartCapture,
  screenCapture,
  openPreview,
  setOpenPreview,
  setCaptureButtonVisible,
  captureButtonVisible,
  setScreenCapture,
}) {
  const { image, takeScreenshot } = useScreenshot();
  const [openCanvas, setOpenCanvas] = useState(false);

  const handleCustomClick = () => {
    setCaptureButtonVisible(false);
    onStartCapture();
  };

  const handleFullSCreenClick = () => {
    setCaptureButtonVisible(false);
    takeScreenshot();
    setOpenPreview(true);
  };

  return (
    <div>
      {captureButtonVisible && (
        <div
          className="rounded-md shadow-sm left-10 bottom-10 absolute"
          role="group"
        >
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white m-1"
            onClick={handleFullSCreenClick}
          >
            <MdFullscreen size={20} className="mr-2" /> Full Screen
          </button>
          <button
            type="button"
            onClick={handleCustomClick}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <TbZoomInArea size={20} className="mr-2" /> Custom Area
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            // onClick={setCaptureButtonVisible(false)}
          >
            <MdOutlineCancel size={20} className="mr-2" /> Cancel
          </button>
        </div>
      )}
      <Modal
        centered
        open={openPreview}
        onOk={() => {
          setOpenPreview(true);
          setOpenCanvas(true);
        }}
        okType="default"
        onCancel={() => {
          setOpenPreview(false);
          setCaptureButtonVisible(true);
          setScreenCapture(null);
        }}
        cancelText={"Retake"}
        okText={"Save"}
        width={900}
      >
        {image && <img width={900} src={image} className="p-5" alt="sda" />}
        {screenCapture && (
          <img width={600} src={screenCapture} className="p-5" alt="sda" />
        )}

        {openCanvas && ( // Render TaskForm if showTaskForm is true
          <TaskForm
            openCanvas={openCanvas}
            setOpenCanvas={setOpenCanvas}
            setCaptureButtonVisible={setCaptureButtonVisible}
            captureButtonVisible={captureButtonVisible}
            image={image}
            openPreview={openPreview}
            setOpenPreview={setOpenPreview}
            screenCapture={screenCapture}
          />
        )}
      </Modal>
    </div>
  );
}

export default CaptureScreen;
