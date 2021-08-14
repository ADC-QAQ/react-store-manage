import './index.scss';
import React, { FC } from 'react';
import { useHistory } from "react-router-dom";
import { Button } from 'antd';

interface props {
    url: string,
    buttonName: string
}
const Jump: FC<props> = (props) => {
    let history = useHistory();
    function handleJump() {
        history.push(props.url);
    }
    return <Button type="primary" onClick={handleJump}>{props.buttonName}</Button>;
};
export default Jump;