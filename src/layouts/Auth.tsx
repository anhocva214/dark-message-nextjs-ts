import React, { ReactNode, useEffect , useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Router from 'next/router';
import {useAppDispatch, useAppSelector} from '@/store/hooks'
import {PuffLoader} from 'react-spinners'; 

type props = {
    children: ReactNode
}


const AuthLayout = (props: props)=>{

    const dispatch = useAppDispatch();

    // const check_token = useSelector((state: AcccountState) => state.check_token);
    // const check_token = useAppSelector(state => state.Account.check_token);
    const [_check_auth, set_check_auth] = useState(false)

    const AuthUser = async ()=>{
        // console.log(check_token)
        let username = localStorage.getItem("username");
        let id = localStorage.getItem("id");
        
        if (!!username && !!id){
            // Router.push("/message")
            set_check_auth(true)
            if (window.location.href.indexOf("message") == -1){
                Router.push("message")
            }
        }
        else {
            set_check_auth(false)
            Router.push("/login");
        }
    }

    useEffect(()=>{
        AuthUser();
        // console.log(_check_auth)
    }, [])


    if (!!_check_auth)
    return(
        <>
            {props.children}
        </>
    )
    return(
        <div style={{
            width: '100%', 
            height: '100vh', 
            backgroundColor: '#111', 
            justifyContent: 'center', 
            alignItems: 'center', 
            display: 'flex'
          }} >
            <PuffLoader size={100} color={"#fff"} />
          </div>
    )
}

export default AuthLayout;