import { Col, Row } from 'antd';
import { oneThirdCol, ROW_GUTTER } from 'utils/antd';

export const IssueFormHeader: React.FC = () => (
  <Row gutter={ROW_GUTTER} style={{ marginBottom: '10px' }}>
    <Col {...oneThirdCol} style={{ textAlign: 'center' }}>
      <h3>
        <strong>Health Issue</strong>
      </h3>
    </Col>
    <Col {...oneThirdCol} style={{ textAlign: 'center' }}>
      <h3>
        <strong>Answer</strong>
      </h3>
    </Col>
    <Col {...oneThirdCol} style={{ textAlign: 'center' }}>
      <h3>
        <strong>Year of onset</strong>
      </h3>
    </Col>
  </Row>
);
