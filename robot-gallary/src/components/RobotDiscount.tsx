import React, {useContext} from "react";
import styles from './Robot.module.css'
import {appContext} from '../AppState'
import withAddToCart from './AddToCart'

interface RobotProps {
    id: number;
    name: string;
    email: string;
    addToCart: ({id, name}) => void
}
//该组件是为了验证高阶组件的功能
const RobotDiscount: React.FC<RobotProps> = ({id, name, email,addToCart}) => {
    const value = useContext(appContext)
  /*  const setState = useContext(appSetStateContext)
    const addToCart = ()=>{
        if (setState){
            setState(state =>{
                return {
                    ...state,
                    shoppingCart:{
                        items:[...state.shoppingCart.items,{id,name}]
                    }
                }
            })
        }
    }*/
    return (
        <div className={styles.cardContainer}>
            <img alt="robot" src={`https://robohash.org/${id}`}/>
            <h2>打折商品</h2>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>作者：{value.username}</p>
            <button onClick={()=>addToCart({id,name})}>加入购物车</button>
        </div>
    );
};

export default withAddToCart(RobotDiscount);
