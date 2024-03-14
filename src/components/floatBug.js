import React, { useState } from "react";
import { Button, FloatButton, Popover } from "antd";
import { BugOutlined } from "@ant-design/icons";
import TicketIcon from "../assets/TicketIcon.png";
import { TbCapture } from "react-icons/tb";
import CaptureScreen from "./captureScreen";

export const FloatBug = ({ handleScreenCapture, setOpen, open }) => {
  const [visible, setVisible] = useState(false); // State to manage popover visibility
  const [captureButtonVisible, setCaptureButtonVisible] = useState(false);

  const handleButtonClick = () => {
    setVisible(!visible); // Toggling popover visibility
  };

  const toggleCaptureButton = () => {
    setCaptureButtonVisible(!captureButtonVisible);
  };

  // const handleTakeScreenshotCancel = () => {
  //   setButtonGroupVisible(false); // Show ButtonGroup when take screenshot is clicked
  // };

  const content = (
    <div className="flex flex-col">
      <span className="font-bold pb-2">Facing Problem ?</span>
      <div className="flex">
        <p className="w-56">
          Our web support team is here to help! Feel free to reach out with any
          questions or issues you're facing while navigating our website.
          <p className="font-bold pt-2">Report an issue.</p>
        </p>
        <img src={TicketIcon} alt="TicketIcon" className="w-40 pl-2 pr-2"></img>
      </div>
      <Button
        type="default"
        className="mt-5"
        icon={<TbCapture />}
        onClick={toggleCaptureButton}
      >
        Take A Screenshot
      </Button>
    </div>
  );

  return (
    <div>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{
          right: 40,
          bottom: 40,
        }}
        icon={<BugOutlined style={{ fontSize: "20px" }} />}
        onClick={handleButtonClick}
      >
        <Popover
          placement="topLeft"
          content={content}
          arrow={false}
          visible={visible}
          onClose={() => setVisible(false)}
        ></Popover>
      </FloatButton.Group>
      {captureButtonVisible && (
        <CaptureScreen
          captureButtonVisible={captureButtonVisible}
          setCaptureButtonVisible={setCaptureButtonVisible}
          handleScreenCapture={handleScreenCapture}
          setOpen={setOpen}
          open={open}
        />
      )}
      {/* Render ButtonGroup only when buttonGroupVisible is true */}
    </div>
  );
};
