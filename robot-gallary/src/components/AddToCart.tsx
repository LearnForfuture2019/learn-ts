import React, {useContext} from "react";
import {appSetStateContext} from "../AppState";
import {RobotProps} from './Robot'
//高阶组件HOC
const withAddToCart = (ChildComponent:React.ComponentType<RobotProps>) =>{

    //返回一个组件
    return (props) =>{
        const setState = useContext(appSetStateContext)
        const addToCart = ({id,name})=>{
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
        }
        return <ChildComponent {...props} addToCart ={addToCart}/>
    }
}
export default withAddToCart
