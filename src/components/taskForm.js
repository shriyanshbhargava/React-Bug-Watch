import React, { useState } from "react";
import { Form, Input, Modal, Radio, Select, notification } from "antd";
import TextArea from "antd/es/input/TextArea";
import CanvasImage from "./canvasImage";

const TaskForm = ({
  openCanvas,
  setOpenCanvas,
  captureButtonVisible,
  setCaptureButtonVisible,
  screenCapture,
  image,
  setOpenPreview,
  openPreview,
  floatVisible,
  setFloatVisible,
}) => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState(null);

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Bug Reported Successfully",
      description:
        "Bug reported, we'll fix it ASAP. Thanks for letting us know!",
    });
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };

  const handleSubmit = () => {
    setFormData(form.getFieldsValue());
    setCaptureButtonVisible(false);
    setOpenPreview(false);
    // setFloatVisible(!floatVisible);
    openNotificationWithIcon("success");

  };

  console.log(formData);

  return (
    <>
      {contextHolder}
      <Modal
        title="Bug Reporting Form"
        centered
        open={openCanvas}
        onOk={handleSubmit}
        okText={"Submit"}
        okType="default"
        onCancel={() => {
          setOpenCanvas(false);
          setCaptureButtonVisible(false);
        }}
        width={1200}
      >
        <div className="flex ">
          <CanvasImage image={image} screenCapture={screenCapture} />
          <Form layout="vertical" form={form} className="ml-8 w-100">
            <Form.Item label="Form Layout" name="layout" className="mb-2">
              <Radio.Group>
                <Radio.Button value="bug">Bug</Radio.Button>
                <Radio.Button value="enhancement">Enhancement</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Impact" name="Impact" className="mb-2">
              <Select
                placeholder="Choose an option"
                onChange={handleChange}
                style={{
                  width: 300,
                }}
                options={options}
              />
            </Form.Item>
            <Form.Item label="Title" name="Title" className="mb-2">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Description" name="Description" className="mb-2">
              <TextArea placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Section" name="Section" className="mb-2">
              <Select
                placeholder="Choose an option"
                onChange={handleChange}
                style={{
                  width: 300,
                }}
                options={options}
              />
            </Form.Item>
            <Form.Item label="Sub-Section" name="Sub-Section" className="mb-2">
              <Select
                placeholder="Choose an option"
                onChange={handleChange}
                style={{
                  width: 300,
                }}
                options={options}
              />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default TaskForm;
