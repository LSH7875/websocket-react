import axios from 'axios';
import React,{useEffect,useRef,useState} from 'react'
import { w3cwebsocket as W3CWebSocket } from "websocket";


const index = ()=>{
    const [socket, setSocket] = useState(false);
    const [state1,setState1]=useState('')
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
            setState1(JSON.stringify(e.data))
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
        ws.current.send('{"type":"Client","data":"버튼누름요"}')
    }
    return(
        <>
            {state1}
            <button onClick={()=>onsubmit()}>보내기</button>

        </>
    )
}

export default index;