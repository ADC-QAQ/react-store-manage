import React from 'react';
import { observer, inject } from 'mobx-react';
import { STORE_HOME, HomeStore } from '@/stores';
import Jump from '@components/jump';
import { Button } from 'antd';

@inject(STORE_HOME)
@observer
class List extends React.Component<{ [STORE_HOME]: HomeStore }> { 
  render() {
    const {
      count,
      increment
    } = this.props[STORE_HOME];
      return <div>
          <Jump url="/home" buttonName="去首页" />
          <Button onClick={increment}>{count}</Button>
      </div>;
  }
}

export default List;