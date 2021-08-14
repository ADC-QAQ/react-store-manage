import React from 'react';
import Jump from '@components/jump';
import { observer } from 'mobx-react';
import { useHomeStore } from '@/stores';
import { Button } from 'antd';

interface Props{
    
}

const Home: React.FC = (Props) => {
    const {
        decrement,
        count
      } = useHomeStore();      
    return (<div>
        <Jump url="/list" buttonName="去列表页" />
        <Button onClick={decrement}>{count}</Button>
    </div>);
};
  
export default observer(Home);