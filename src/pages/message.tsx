import { io, Socket } from "socket.io-client";

import { useEffect, useState, useRef } from 'react';
import AuthLayout from "@/layouts/Auth";
import { ListMessageToString, ListMessageToArray, UsernameToAvatar } from "@/functions/String";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

// Reqiest
import {
    RequestSendMessage,
} from '@/constants/Request'




const MessagePage = () => {

    const dispatch = useAppDispatch();

    const list_message = useAppSelector(state => state.Account.list_message)

    const [_text_avatar, set_text_avatar] = useState("");
    const [_username, set_username] = useState("");
    const [_message, set_message] = useState("");
    const [_id, set_id] = useState("")
    const [_list_message, set_list_message] = useState([])
    const [_win_height, set_win_height] = useState(100);

    const [_send_count, set_send_count] = useState(0)

    const socket = io("https://dark-message.herokuapp.com", {
        withCredentials: true,
    });


    useEffect(() => {
        // socket.on("connection").;
        let text = localStorage.getItem("username");
        let id = localStorage.getItem("id");

        
        socket.on("join_into_world", Set_message)

       
        set_id(id);
        if (!!text) {

            if (!localStorage.getItem("world_group")){
                socket.emit("join_into_world", {id, username: text, noti: true});
                localStorage.setItem("world_group", "true")
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

        // document.addEventListener("visibilitychange", () => {
        //     if (document.visibilityState == "visible") {
        //         soc.emit("loggout", "onl")
        //     } else {
        //         soc.emit("loggout", "off")
        //     }
        //   })

        set_win_height(window.innerHeight)

    }, [])

    useEffect(() => {
        var chatContent = document.getElementById("chat-content");
        if (!!chatContent)
        chatContent.scrollTop = chatContent.scrollHeight
    })

    const SendMessage = async (e: any) => {
        e.preventDefault();
        if (_message.length > 0) {
            let d = new Date();
            let message_box = {
                id: _id,
                username: _username,
                message: [_message.trim()],
                time: d.getTime()
            }

            set_message("")

            
            socket.emit("server_message_global", message_box)
        }

    }


    useEffect(() => {
        socket.on("client_message_global", Set_message)
    }, [])


    const Function_1 = (arr)=>{
        try{
            // let arr = [...arr_1];
            let len = arr.length;
            let i = 0;
            while (i < len-1){
                // console.log(i, len)
                if (arr[i].id == null || !!arr[i].noti) i++;
                // console.log(arr[i].id, arr[i+1].id)
                if (arr[i].id == arr[i+1].id){
                    // console.log([...arr[i].message, arr[i+1].message])
                    arr[i+1].message = [...arr[i].message, arr[i+1].message];
                    arr[i].id = null;
                    // arr.shift();
                    // len--;
                }
                i++;

            }
    
            // console.log(arr)
            // return arr;
        }
        catch(e){console.log(e)}
        
    }

    const Set_message = (data: any) => {
        // console.log("server to: ", data)
        // set_list_message([data])
        let temp = _list_message;
        if (temp.length == 0){
            temp = ListMessageToArray(localStorage.getItem("list_message"))
        }
        // console.log(temp)
        temp.push(data);
        
        // let temp_ = _list_message;
        // temp_ = [...temp];

        Function_1(temp)


        set_list_message( temp)
        set_send_count(_send_count => _send_count + 1)

        let str = ListMessageToString(temp);
        localStorage.setItem("list_message", str);

        // console.log(_list_message)
    }


    return (
        <AuthLayout>
            <main className="message-page">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 p-0">
                        <div className="sidebar">
                            <div className="topbar">
                                <div className="user">
                                    <div className="avatar" style={{ textTransform: "uppercase" }}>{_text_avatar}</div>
                                    <div className="username">{_username}</div>
                                </div>
                                {/* <div class="edit-username">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                        </svg>
                  </div> */}
                                <div className="icon-menu">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-menu-button-wide" viewBox="0 0 16 16">
                                        <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-13z" />
                                        <path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                                    </svg>
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
                    <div className="col-lg-9 col-md-8 col-sm-8 p-0 message-container">
                        <div className="message-content">
                            <div className="head">
                                <div className="username">Thế giới</div>
                            </div>
                            <div id="chat-content" className="chat-content" style={{ height: _win_height - 36 }}>
                                {
                                    _list_message.length > 0 ? _list_message.map((value, index) => {

                                        if (value?.noti == true){
                                            return (<div className="chat-noti">{value?.username} joined the group</div>)
                                        }
                                        else if (value.id == _id) {
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
                                                            )) : (<div className="message">{value?.message}</div>)
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }
                                        else if (!!value.id) 
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
                                                            )) : (<div className="message">{value?.message}</div>)
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
                                <input value={_message} onChange={(e) => set_message(e.target.value)} type="text" placeholder="Nhập tin nhắn..." />
                                <div className="reaction-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
                                    </svg>
                                </div>
                                <button className="btn-submit" style={{ backgroundColor: "#0000", border: 0, outline: 0 }}>
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