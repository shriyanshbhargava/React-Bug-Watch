import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useScreenshot } from "use-screenshot-hook";
import { MdFullscreen } from "react-icons/md";
import { TbReload } from "react-icons/tb";
import TaskForm from "./taskForm";

function CaptureScreen({
  onStartCapture,
  screenCapture,
  open,
  setOpen,
  setCaptureButtonVisible,
  captureButtonVisible,
}) {
  const { image, takeScreenshot } = useScreenshot();
  const [openTask, setOpenTask] = useState(false);

  console.log(open, setOpen);

  const handleCustomClick = () => {
    setCaptureButtonVisible(false);
    onStartCapture();
  };

  const handleFullSCreenClick = () => {
    setCaptureButtonVisible(false);
    takeScreenshot();
    setOpen(true);
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
            Full Screen
          </button>
          <button
            type="button"
            onClick={handleCustomClick}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Custom Area
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            // onClick={hide}
          >
            Cancel
          </button>
        </div>
      )}
      <Modal
        centered
        visible={open}
        onOk={() => {
          setOpen(true);
          setOpenTask(true);
        }}
        okType="default"
        onCancel={() => {
          setOpen(true);
          setCaptureButtonVisible(true);
        }}
        cancelText={"Retake"}
        okText={"Save"}
        width={1000}
      >
        {image && <img width={1000} src={image} className="p-5" alt="sda" />}
        {screenCapture && (
          <img width={1000} src={screenCapture} className="p-5" alt="sda" />
        )}

        {openTask && ( // Render TaskForm if showTaskForm is true
          <TaskForm
            openTask={openTask}
            setOpenTask={setOpenTask}
            setShowIcons={setCaptureButtonVisible}
            image={image}
            open={open}
            setOpen={open}
            screenCapture={screenCapture}
          />
        )}
      </Modal>
    </div>
  );
}

export default CaptureScreen;
