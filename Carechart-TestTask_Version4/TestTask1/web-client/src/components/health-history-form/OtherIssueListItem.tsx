import { ReactNode, useCallback } from 'react';

import { Input } from 'antd';

type T = Record<string, any>;
export interface OtherIssueItemPropsType {
  value: T;
  onChange: (value: T) => void;
  children: ReactNode;
}

export default function OtherIssueListItem({
  value,
  onChange,
  children
}: OtherIssueItemPropsType) {
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, field: string | number) => {
      const newValue = { ...value, [field]: event.target.value };
      onChange(newValue);
    },
    [value, onChange]
  );

  return (
    <li style={{ display: 'flex', columnGap: '20px', marginBottom: '8px' }}>
      <Input
        type="text"
        value={value.issue || ''}
        onChange={e => handleInputChange(e, 'issue')}
        placeholder="Issue"
      />
      <Input
        type="number"
        value={value.yearOfOnset || ''}
        onChange={e => handleInputChange(e, 'yearOfOnset')}
        placeholder="Year of Onset"
        disabled={!value.issue}
      />
      {children}
    </li>
  );
}
