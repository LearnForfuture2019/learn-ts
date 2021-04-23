### useEffect
- 在useEffect函数中去掉第二个参数的话，那么函数将会一直执行
- 如何在useEffect中使用async/await？
    1. 对于useEffect来说，要么返回一个函数，要么什么都不返回
    2. useEffect不支持关键字async，因为如果在useEffect中使用async
    那么其将会返回一个promise，原本的返回值类型将会被promise代替，而
    这个promise既不是函数，也不是null，因此不能使用。
    3. 解决方法是：在useEffect在定义一个函数，在该函数内部取执行
    async/await的逻辑
    ```useEffect(() => {
     const fetchData = async ()=>{
             const res = await fetch("https://jsonplaceholder.typicode.com/users")
             const data = await res.json()
             setRobotGallery(data)
         }
         fetchData()
     }, [])```
- 如何处理Loading？在数据未返回之前的那段时间
    - 定义一个状态`loading`来判断即可
    
- 如何处理异常？利用try...catch即可

### Context 与 useContext
#### Context可以实现全局状态的共享
- 使用方式是：定义一个全局上下文变量`
                     export const appContext = React.createContext(defaultContextValue)`
 
 - 创建一个context组件，该组件使用返回一个`appContext.Provider`，之后将该组件包裹在需要使用该组件的地方
 ```
//这是全局状态组件
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
//这是需要使用全局状态的组件
<AppStateProvider>
          <App/>
      </AppStateProvider>
 ```
- 对于在app组件下的组件，如果是函数组件，那么可以使用useContext来对状态进行获取
；对于类组件，则需要使用appContext.Consumer来获取
```
//类组件获取信息的方式
const value = useContext(appContext)
//函数组件获取全局状态
<appContext.Consumer>
    {
        （value）=>{
            return (<div></div>) 
        }   
    }
</appContext.Consumer>
```  
很显然，如果是使用函数组件的话，获取全局状态将会变得十分简单
