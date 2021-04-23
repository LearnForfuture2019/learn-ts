import React, {useState} from "react";

interface AppStateValue {
    username:string
    shoppingCart:{items:{id:number,name:string}[]}
}

const defaultContextValue:AppStateValue = {
    username:'Ryan',
    shoppingCart:{items:[]}
}
//定义一个全局上下文变量
export const appContext = React.createContext(defaultContextValue)
//实现全局共享setState，完成状态的更新
export const appSetStateContext = React.createContext<any>(undefined)

const AppStateProvider:React.FC = (props) =>{
    //setState类型：React.Dispatch<React.SetStateAction<AppstateValue>>
    const [state,setState] = useState(defaultContextValue)

    return (
        <appContext.Provider value={state} >
            <appSetStateContext.Provider value={setState}>
                {props.children}
            </appSetStateContext.Provider>

        </appContext.Provider>
        )

}
export default AppStateProvider
