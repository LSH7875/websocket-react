import axios from 'axios';
import React,{useEffect,useRef,useState} from 'react'
import { w3cwebsocket as W3CWebSocket } from "websocket";


const index = ()=>{
    const [socket, setSocket] = useState(false);
    const ws = useRef(null);
    // const client = new W3CWebSocket('ws://127.0.0.1:8080');
    useEffect(()=>{
        ws.current= new W3CWebSocket('ws://127.0.0.1:8080');
        ws.current.onopen=()=>{
            console.log('connected!')
            setSocket(true)
        }
    },[]);
    useEffect(()=>{
    
        ws.current.onmessage=e=>{
            console.log(e)
        }
    },[socket])

    // const [state,setState]=React.useState('')
    // React.useEffect(async()=>{
    //     const response =await axios.get('http://localhost:3000')
    //     const aaa= {...response.data};
    //     const bbb = {...aaa}
    //     setState(bbb.match)
        
    // },[])
  
    // console.log('--------------dlrjek')
    // console.log((response.data.match))
   
    // console.log(aaa.match)
    // console.log(bbb);
    // console.log(typeof ccc)
    const onsubmit=()=>{
        ws.current.send('{"metch":"보내기 버튼 누름!"}')
    }
    return(
        <>
            <button onClick={()=>onsubmit()}>보내기</button>
        </>
    )
}

export default index;