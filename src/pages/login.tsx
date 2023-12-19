
import {
    withStyles,
  } from '@material-ui/core/styles';
import {TextField, Button} from '@material-ui/core'
import Router from 'next/router'
import { useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { v1 as uuidv1 } from 'uuid';



const LoginPage = ()=>{

    const dispatch = useAppDispatch();

    const [_username, set_username] = useState("");

    const Start = (e)=>{
        console.log("click");
        localStorage.clear();
        localStorage.setItem("list_message", `{"id":null}`)

        e.preventDefault();
        if (_username.length > 3){
            localStorage.setItem("username", _username);
            localStorage.setItem("id", uuidv1())
            Router.push("/");
        }
        else{
            dispatch({type: "ALERT_ERROR", msg: "Tài khoản quá ngắn"})
        }
    }


    return (
        <div style={{backgroundColor: "#111", display: "flex", justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            
            <form onSubmit={(e)=>Start(e)} className="from-login d-flex justify-content-center align-items-center" style={{flexDirection: 'column'}}>
                <TextField id="standard-basic" label="Username" onChange={(e)=>set_username(e.target.value.trim())} />
                <div className="p-3"></div>
                <Button type="submit" variant="contained">Start</Button>
            </form>

            <style jsx global>{`
                .MuiInput-underline:hover{
                    border-bottom: 1px solid green !important;
                }
                button{
                    outline: 0 !important;
                    width: 100%;
                }
                .MuiFormLabel-root{
                    color: #fff !important;
                }
                .MuiInputBase-input{
                    color: #fff !important;
                }
                .MuiInput-underline:before{
                    border-bottom: 1px solid #fff !important;
                }
                .MuiInput-underline:after{
                    border-bottom: 1px solid green !important;

                }
            `}</style>

        </div>
    )
}

export default LoginPage;