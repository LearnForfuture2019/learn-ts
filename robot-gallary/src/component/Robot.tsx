import React from "react";

interface RobotProps {
    id: number,
    name: string,
    email: string
}

//React.FC表示函数组件的类型
const Robot: React.FC<RobotProps> = ({id, name, email}) => {
    console.log('test')
    return <li>
        <img src={`https://robohash.org/${id}`} alt="robot"/>
        <h2>{name}</h2>
        <p>{email}</p>
    </li>
}
export default Robot
