import React, {useState, useEffect} from "react";
import logo from "./assets/images/logo.svg";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import ShoppingCart from "./components/ShoppingCart";

interface Props {
}

interface State {
    robotGallery: any[];
    count: number;
}

const App: React.FC = (props) => {
    const [count, setCount] = useState<number>(0)
    const [robotGallery, setRobotGallery] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        document.title = `点击${count}次`
    }, [count])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await res.json()
            setRobotGallery(data)
            setLoading(false)
        }
        fetchData()
    }, [])
    return (
        <div className={styles.app}>
            <div className={styles.appHeader}>
                <img src={logo} className={styles.appLogo} alt="logo"/>
                <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
            </div>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                Click
            </button>
            <span>count: {count}</span>
            <ShoppingCart/>
            {
                !loading
                    ?
                <div className={styles.robotList}>
                    {robotGallery.map((r: any) => (
                        <Robot id={r.id} email={r.email} name={r.name}/>
                    ))}
                </div>
                    :
                'loading'
            }

        </div>
    );
}


export default App;
