import { useCallback, useState } from 'react';

import { Button } from 'antd';

import { OtherIssueItemPropsType } from './OtherIssueListItem';

type T = Record<string, any>;
interface PropsType {
  value?: T[];
  onChange: (value: T[]) => void;
  renderProps: (props: OtherIssueItemPropsType) => JSX.Element;
}

export default function OtherIssueList({
  value = [],
  onChange,
  ...props
}: PropsType) {
  const [newValue, setNewValue] = useState<T>({});

  const handleAddItem = useCallback(() => {
    onChange([...value, newValue]);
    setNewValue({});
  }, [onChange, value]);

  const handleDeleteItem = useCallback(
    (index: number) => {
      const updatedList = value.filter((_, i) => i !== index);
      onChange(updatedList);
    },
    [onChange, value]
  );

  const handleItemChange = useCallback(
    (index: number, newItem: T) => {
      const updatedList = value.map((item, i) =>
        i === index ? newItem : item
      );
      onChange(updatedList);
    },
    [onChange, value]
  );

  return (
    <ul style={{ listStyle: 'none', padding: '0px' }}>
      {value?.map((item, index) => (
        <props.renderProps
          key={index}
          value={item}
          onChange={newItem => handleItemChange(index, newItem)}
        >
          <Button shape="circle" onClick={() => handleDeleteItem(index)}>
            🗑️
          </Button>
        </props.renderProps>
      ))}
      <props.renderProps value={newValue} onChange={setNewValue}>
        <Button shape="circle" onClick={handleAddItem}>
          +
        </Button>
      </props.renderProps>
    </ul>
  );
}
