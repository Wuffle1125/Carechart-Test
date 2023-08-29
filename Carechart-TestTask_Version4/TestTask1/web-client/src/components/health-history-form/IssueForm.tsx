import * as React from 'react';

import { Col, Input, Row, Select } from 'antd';
import { healthIssueOnsetOptions } from 'constants/health-issue-onset-answer';
import { Issue } from 'documents';
import { selectProps } from 'utils/antd';

export interface IssueFormProps {
  label: string;
  value?: Issue;
  onChange?: (value: Issue) => void;
}

export const IssueForm: React.FC<IssueFormProps> = ({
  label,
  value,
  onChange
}) => {
  const handleAnswerChange = React.useCallback(
    (answer: string) => {
      onChange?.({ ...value, answer });
    },
    [onChange, value]
  );

  const handleYearOfOnsetChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.({ ...value, onsetYear: e.target.value });
    },
    [onChange, value]
  );

  return (
    <Row gutter={[8, 24]} style={{ marginBottom: '10px' }}>
      <Col span={8}>
        <label>{label}</label>
      </Col>
      <Col span={8}>
        <Select
          options={healthIssueOnsetOptions}
          {...selectProps}
          value={value?.answer}
          style={{ width: '100%' }}
          onChange={handleAnswerChange}
        />
      </Col>
      <Col span={8}>
        <Input
          placeholder="Type in year of onset"
          style={{ width: '100%' }}
          value={value?.onsetYear}
          onChange={handleYearOfOnsetChange}
        />
      </Col>
    </Row>
  );
};
