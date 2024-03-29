import { io, Socket } from "socket.io-client";

import { useEffect, useState, useRef } from 'react';
import AuthLayout from "@/layouts/Auth";
import { ListMessageToString, ListMessageToArray, UsernameToAvatar } from "@/functions/String";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import useSound from 'use-sound'
import IconCircleRadiation from "@/components/icons/circle-radiation";
import { useRouter } from "next/router";
const production = "http://149.28.155.245:3004";
const development = "http://localhost:20721"
const socket = io(production, {
    withCredentials: true,
});



const MessagePage = () => {
    const router = useRouter()
    const dispatch = useAppDispatch();

    const list_message = useAppSelector(state => state.Account.list_message)

    const [_text_avatar, set_text_avatar] = useState("");
    const [_username, set_username] = useState("");
    // const [_message, set_message] = useState("");
    const [_id, set_id] = useState("")
    const [_list_message, set_list_message] = useState([])
    const [_win_height, set_win_height] = useState(100);
    const [_print_list_message, set_print_list_message] = useState([])

    const [_send_count, set_send_count] = useState(0)

    const [_status, set_status] = useState(true);
    const [play_sound_new_message, {stop}] = useSound(
        '/mp3/new_message.mp3',
        { volume: 0.3 }
      );
      const [play_sound_new_join] = useSound(
        '/mp3/join.mp3',
        { volume: 0.3 }
      );



    useEffect(() => {
        // socket.on("connection").;
        let text = localStorage.getItem("username");
        let id = localStorage.getItem("id");


        try{
            let data_old = localStorage.getItem("list_message");
            if (data_old.length > 0){
                let temp = ListMessageToArray(data_old);
                // console.log("temp before: ", temp)
                set_list_message(temp);
                set_send_count(_send_count => _send_count + 1);
            }
        }catch(e){}
       
        // set_send_count(_send_count => _send_count + 1);
        socket.on("join_into_world", (data)=>{
            SetListMessage(data);
            // console.log(data)
            // console.log(data.id, " - ", localStorage.getItem("id"))
            // _autido_join.pause();
            // _autido_join.currentTime = 0;
            // // console.log(data.id != localStorage.getItem("id"))
            // // console.log(data.id, " - ", localStorage.getItem("id"))
            if (data.id != localStorage.getItem("id")){
                ref_new_join?.current.click();

            }
        })

        set_id(id => id);
        if (!!text) {

            if (localStorage.getItem("world_group") != "true") {
                socket.emit("join_into_world", { id, username: text, noti: true });
                localStorage.setItem("world_group", "true");

                // setTimeout(() => {
                //     // localStorage.removeItem("list_message");
                //     Router.reload()
                // }, 1000);
            }

            set_username(text);
            let text_arr = text.split(" ");
            if (text_arr.length == 1) {
                set_text_avatar(text_arr[0][0])
            }
            else {
                set_text_avatar(text_arr[0][0] + text_arr[text_arr.length - 1][0])
            }


        }

        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState == "visible") {
                localStorage.setItem("status", "onl")
                // soc.emit("loggout", "onl")
            } else {
                // soc.emit("loggout", "off")
                localStorage.setItem("status", "off")

            }
        })

        set_win_height(window.innerHeight)


    }, [])

    useEffect(() => {
        var chatContent = document.getElementById("chat-content");
        if (!!chatContent)
            chatContent.scrollTop = chatContent.scrollHeight
    })

    const SendMessage = async (e: any) => {

        e.preventDefault();
        // console.log(e.target[0].value)
        let message = e.target[0].value.trim();
        if (message.length > 0) {
            let d = new Date();
            let message_box = {
                id: localStorage.getItem("id"),
                username: _username,
                message: [message],
                time: d.getTime()
            }

            // set_message("")
            e.target[0].value = "";


            socket.emit("server_message_global", message_box)
        }

    }

    

    useEffect(() => {
        socket.on("client_message_global", SetListMessage)
    }, [])




    const Function_1 = (arr_json : any) => {
        try {
            let i = 0;
            let len = arr_json.length;
            let result = [];

            while (i < len - 1) {
                if (arr_json[i]?.noti){
                    result.push(arr_json[i])
                }
                else if (arr_json[i].id == arr_json[i + 1].id && arr_json[i].id != null) {
                    let json = {
                        id: arr_json[i].id,
                        username: arr_json[i].username,
                        message: [...arr_json[i].message, ...arr_json[i + 1].message],
                        time: arr_json[i + 1].time
                    }
                    arr_json[i + 1] = { ...json }
                }
                else if (arr_json[i].id) {
                    // console.log(arr_json[i])
                    result.push(arr_json[i])
                }

                i++;
            }
            result.push(arr_json[len-1])


            // console.log(result)
            return result
        }
        catch (e) { console.log(e) }

    }

    const ref_new_message = useRef<HTMLDivElement>(null);
    const ref_new_join = useRef<HTMLDivElement>(null);


    const SetListMessage = async (data: any) => {
        if (!!data?.id && !data?.noti && data.id != localStorage.getItem("id") && localStorage.getItem("status") == "off"){
            console.log("new message")
            ref_new_message?.current.click();
        }

        let temp :any = [];
        // console.log("temp ", temp)
        let text = localStorage.getItem("list_message")||"[]";
        console.log("🚀 ~ file: index.tsx:211 ~ SetListMessage ~ text:", text)

        if (text?.length > 0) {
            temp = ListMessageToArray(text);
        }
       
        temp.push(data);

        set_list_message(temp)
        set_send_count(_send_count => _send_count + 1)

    }

    useEffect(() => {
        let t = [..._list_message];
       
        let temp = Function_1(t);
        set_print_list_message(temp)
        let str = ListMessageToString(temp);
        localStorage.setItem("list_message", str);
    }, [_send_count])

    
    const destroy = ()=>{
        localStorage.removeItem("list_message")
        setTimeout(() => {
            router.reload()
        }, 500);
    }

    return (
        <AuthLayout>
            <div ref={ref_new_join} className="btn btn-primary d-none" onClick={()=>play_sound_new_join()}> click </div>

            <div ref={ref_new_message} className="btn btn-primary d-none" onClick={()=>play_sound_new_message()}> click </div>
            
            <main className="message-page">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 p-0">
                        <div className="sidebar">
                            <div className="topbar">
                                <div className="user">
                                    <div className="avatar" style={{ textTransform: "uppercase" }}>{_text_avatar}</div>
                                    <div className="username">{_username}</div>
                                </div>
                                <div className="icon-menu">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-menu-button-wide" viewBox="0 0 16 16">
                                        <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-13z" />
                                        <path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                                    </svg> */}
                                    <a onClick={destroy} role="button" className="mr-3">
                                        <IconCircleRadiation fill="#ff4d4f"  />
                                    </a>
                                </div>
                            </div>
                            <div className="search-bar">
                                <input type="text" className="input-search" placeholder="Tìm kiếm..." />
                            </div>

                            <div className="card-user active">
                                <div className="user">
                                    <div className="avatar">TG</div>
                                    <div className="username">Thế Giới</div>
                                </div>
                                <div className="mute-noti" />
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-8 p-0 message-container pt-3">
                        <div className="message-content">
                            <div className="head">
                                <div className="username">Liên Minh Bí Ngô</div>
                            </div>
                            <div id="chat-content" className="chat-content" >
                                {
                                    _print_list_message.length > 0 ? _print_list_message.map((value, index) => {

                                        if (value?.noti == true) {
                                            return (<div key={index} className="chat-noti">{value?.username} joined the group</div>)
                                        }
                                        else if (value?.id == localStorage.getItem("id")) {
                                            return (
                                                <div key={index} className="card-chat me">
                                                    <div className="user">
                                                        <div className="username">{value?.username}</div>
                                                        <div style={{ textTransform: 'uppercase' }} className="avatar">{UsernameToAvatar(value?.username)}</div>

                                                    </div>
                                                    <div className="box">
                                                        {
                                                            typeof value?.message == "object" ? value?.message.map((msg, i) => (
                                                                <div key={i} className="message">{msg}</div>
                                                            )) : (<div key={index} className="message">{value?.message}</div>)
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }
                                        else if (!!value?.id)
                                            return (
                                                <div key={index} className="card-chat">
                                                    <div className="user">
                                                        <div style={{ textTransform: 'uppercase' }} className="avatar">{UsernameToAvatar(value?.username)}</div>
                                                        <div className="username">{value?.username}</div>
                                                    </div>
                                                    <div className="box">
                                                        {
                                                            typeof value?.message == "object" ? value?.message.map((msg, i) => (
                                                                <div key={i} className="message">{msg}</div>
                                                            )) : (<div key={value.id} className="message">{value?.message}</div>)
                                                        }
                                                    </div>
                                                </div>
                                            )
                                    }) : (<></>)
                                }

                                {/* <div className="chat-noti">anho joined the group</div>
                                <div className="card-chat me">
                                    <div className="user">
                                        <div className="username">an ho</div>
                                        <div className="avatar">AH</div>
                                    </div>
                                    <div className="box">
                                        <div className="message">hello everyone</div>
                                        <div className="message">how are you</div>
                                    </div>
                                </div> */}
                            </div>
                            <form onSubmit={(e) => SendMessage(e)} className="input-chat-text">
                                <input autoComplete="off" name="message" type="text" placeholder="Nhập tin nhắn..." />
                                <div className="reaction-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
                                    </svg>
                                </div>
                                <button type="submit" className="btn-submit" style={{ backgroundColor: "#0000", border: 0, outline: 0 }}>
                                    <i className="fa fa-paper-plane" aria-hidden="true" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </AuthLayout>
    )
}

export default MessagePage;