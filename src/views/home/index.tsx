import Jump from '@components/jump';
// import { inject, observer } from 'mobx-react';
// import homeStore from '../../stores';


const Home = () => {
    return (<div>
        <Jump url="/list" buttonName="去列表页" />
    </div>);
};
  
// export default observer(Home);
export default Home;