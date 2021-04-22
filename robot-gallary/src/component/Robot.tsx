import React from "react";

interface RobotProps {
    id:string,
    name:string,
    email:string
}

//React.FC表示函数组件的类型
const Robot:React.FC<RobotProps> = (props)=>{
    const {id,name,email} = props
    return <li>
        <img src={`https://robohash.org/${id}`} alt=""/>
    </li>
}
export default Robot
