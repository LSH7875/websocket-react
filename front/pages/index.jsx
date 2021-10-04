import axios from 'axios';
import React,{useLayoutEffect,useEffect,useRef,useState,useComponentWillMount} from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";






// const index = ()=>{
   
//     const [state,setState]=React.useState('');
//     const [socketConnected,setSocketConnected]=useState(false)
    
//     const ws =useRef(null);

//     useEffect(()=>{
//         ws.current = new WebSocket('ws://127.0.0.1:8080');
//         ws.current.onopen=()=>{
//             console.log('connected!');
//             setSocketConnected(true)
//         }
//     },[]);
    
//     // ws.current.onmessage=(message) =>{
//     //     console.log(message.data);
//     //     setState(JSON.parse(message.data))
//     // }
//     useEffect(()=>{
//         console.log('유즈이펙트 작동함')
//         ws.current.onmessage=(message)=>{
//           console.log(message);
//         console.log(message);
//         // setState(message.data);
//     }},[socketConnected])
//     // console.log('--------------dlrjek')
//     // console.log((response.data.match))
   
//     // console.log(aaa.match)
//     // console.log(bbb);
//     // console.log(typeof ccc)
//     return(
//         <>dddd{state}
//         </>
//     )
// }

// export default index;

export default function AppWs() {
    const [isPaused, setPause] = useState(false);
    const ws = useRef(null);

    useEffect(() => {
        ws.current = new WebSocket("wss://ws.kraken.com/");
        ws.current.onopen = () => console.log("ws opened");
        ws.current.onclose = () => console.log("ws closed");

        return () => {
            ws.current.close();
        };
    }, []);

    useEffect(() => {
        if (!ws.current) return;

        ws.current.onmessage = e => {
            if (isPaused) return;
            const message = JSON.parse(e.data);
            console.log("e", message);
        };
    }, [isPaused]);

    return (
        <div>
            <button onClick={() => setPause(!isPaused)}>
                {isPaused ? "Resume" : "Pause"}
            </button>
        </div>
    );
}