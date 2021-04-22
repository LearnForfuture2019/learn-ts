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
