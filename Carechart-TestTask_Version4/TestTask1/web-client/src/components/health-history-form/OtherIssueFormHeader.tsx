import { Col, Row } from 'antd';
import { halfCol, ROW_GUTTER } from 'utils/antd';

export const OtherIssueFormHeader: React.FC = () => (
  <Row gutter={ROW_GUTTER} style={{ marginBottom: '10px' }}>
    <Col {...halfCol} style={{ textAlign: 'center' }}>
      <h3>
        <strong>Issue</strong>
      </h3>
    </Col>
    <Col {...halfCol} style={{ textAlign: 'center' }}>
      <h3>
        <strong>Year of onset</strong>
      </h3>
    </Col>
  </Row>
);
