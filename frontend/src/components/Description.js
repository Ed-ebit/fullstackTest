import { Descriptions } from 'antd';
import React from 'react';

const Description = ({items}) => (
  <Descriptions>
    { items.map(({ label, value }) => 
      <Descriptions.Item label={ label }>
        { value }
      </Descriptions.Item> 
    )}
  </Descriptions>
);

export default Description;