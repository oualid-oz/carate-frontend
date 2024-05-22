import { Button, Col, Form, Row } from "antd";
import React from "react";
import { FormattedMessage } from "react-intl";
import { editCarFields } from "../TableColumnFields";
import messages from "../../../../messages";

function EditCarForm({ onValidateAction, onCancelAction, editCarInfos }) {
  const [form] = Form.useForm();
  const initialFormValues = {
    ...editCarInfos,
  };
  const memoizedEditCarFields = React.useMemo(() => editCarFields(), []);

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onValidateAction}
      initialValues={initialFormValues}
    >
      <Row gutter={16} align="stretch">
        {memoizedEditCarFields.map((field) => (
          <Col span={12} key={field.name}>
            <Form.Item
              label={field.label}
              name={field.name}
              rules={field.rules}
            >
              {field.inputComponent}
            </Form.Item>
          </Col>
        ))}
      </Row>
      <Row justify="end">
        <Button type="text" onClick={onCancelAction}>
          <FormattedMessage {...messages.cancel} />
        </Button>
        <Button htmlType="submit" type="primary" className="ml-3">
          <FormattedMessage {...messages.addCar} />
        </Button>
      </Row>
    </Form>
  );
}

export default EditCarForm;
