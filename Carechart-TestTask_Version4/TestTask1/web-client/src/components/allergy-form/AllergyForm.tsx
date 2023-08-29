import * as React from 'react';

import { Form, Input } from 'antd';
import { PatientAllergy } from 'documents';
import { handleFormChange } from 'utils/antd';

interface AllergyFormProps {
  value: PatientAllergy | undefined;
  onChange: (doc: PatientAllergy) => void;
}

export const AllergyForm: React.FC<AllergyFormProps> = ({
  value,
  onChange
}) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    form.setFieldsValue({ ...value });
  }, [form, value]);

  const onValuesChange = React.useCallback(
    (changedValue: any, changedValues: any) =>
      onChange(handleFormChange(changedValue, changedValues, value)),
    [onChange, value]
  );

  return (
    <Form
      form={form}
      name="allergies-form"
      layout="vertical"
      onValuesChange={onValuesChange}
    >
      <Form.Item className="hh-comments" name="comments" label="Comments">
        <Input.TextArea
          rows={5}
          placeholder="Please add any details you consider important."
        />
      </Form.Item>
    </Form>
  );
};
