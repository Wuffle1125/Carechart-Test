import * as React from 'react';

import { Button, Col, Form, Input, Row } from 'antd';
import { PatientHealthHistory } from 'documents';
import { halfCol, handleFormChange } from 'utils/antd';

import { labels } from './consts';
import { IssueForm } from './IssueForm';
import { IssueFormHeader } from './IssueFormHeader';
import { OtherIssueFormHeader } from './OtherIssueFormHeader';
import OtherIssueList from './OtherIssueList';
import OtherIssueListItem from './OtherIssueListItem';

const { TextArea } = Input;

export interface HealthHistoryFormProps {
  value?: PatientHealthHistory;
  onChange: (value: PatientHealthHistory) => void;
}

export const HealthHistoryForm: React.FC<HealthHistoryFormProps> = ({
  value,
  onChange
}) => {
  const handleValuesChange = React.useCallback(
    (changedValue: any, changedValues: any) => {
      onChange(handleFormChange(changedValue, changedValues, value));
    },
    [onChange, value]
  );

  const otherIssueHeaderDesc =
    'Are there any other issues that are bothering you?';

  return (
    <Form
      name="health-history-form"
      layout="vertical"
      initialValues={{ ...value }}
      onValuesChange={handleValuesChange}
    >
      <IssueFormHeader />
      {Object.entries(labels).map(([key, label]) => (
        <Form.Item key={key} name={key}>
          <IssueForm label={label} />
        </Form.Item>
      ))}

      <p style={{ fontSize: '18px' }}>{otherIssueHeaderDesc}</p>
      <OtherIssueFormHeader />

      <OtherIssueList
        value={value?.extraIssues}
        onChange={(value: Record<string, any>[]) => {
          const changedValue = { extraIssues: value };
          handleValuesChange(changedValue, changedValue);
        }}
        renderProps={OtherIssueListItem}
      />

      <p style={{ fontSize: '18px', fontWeight: '500' }}>Comments</p>

      <TextArea
        placeholder="Please add any details you consider important"
        rows={5}
        style={{ marginBottom: '16px', display: 'block' }}
        value={value?.comments}
        name="comments"
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          const changedValue = { [e.target.name]: e.target.value };
          handleValuesChange(changedValue, changedValue);
        }}
      />

      <Row>
        <Col {...halfCol}>
          <Button type="primary">Back</Button>
        </Col>
        <Col {...halfCol}>
          <Row>
            <div style={{ textAlign: 'right', width: '100%' }}>
              <Button type="primary" style={{ float: 'right' }}>
                Next
              </Button>
            </div>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};
