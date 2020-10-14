import React from 'react';
import {nanoid} from "nanoid";
import PwdItem from "./pwd-item";

const PwdList = ({pwdList}) => {
    return <ul className="output-pwd-list">
        {pwdList.map((pwd) => (
            <PwdItem key={nanoid()} pwd={pwd}/>
        ))}
    </ul>
}

export default PwdList;