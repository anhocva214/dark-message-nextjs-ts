import axios from 'axios';
import {
    API_SEND_MESSAGE
} from './APIs';
import cookie from 'react-cookies';


const ErrorResponse = (e: any) => {
    try {
        // console.log(e.response)
        console.log("Status: ", e.response.status);
        console.log("Data: ", e.response.data)
        return { ...e.response.data, auth: false }
    }
    catch (err) {
        console.log(err)
    }
}

export const RequestSendMessage = async (data: any) => {
    let response = await axios({
        url: API_SEND_MESSAGE,
        method: "POST",
        data: data
    })
        .then(({ data }) => {
            return { ...data, auth: true }
        })
        .catch(e => ErrorResponse(e))

    return response
}