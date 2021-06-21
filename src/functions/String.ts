
export const ListMessageToString = (data: any) => {
    let dataString = "";
    data.forEach((value) => {
        dataString += JSON.stringify(value) + "*";
    })
    return dataString.slice(0, -1);
}

export const ListMessageToArray = (data: any) => {
    try {

        if (typeof data == "object") {
            let dataArr = [...data];
            return dataArr;

        }
        else {
            // console.log(data)
            let dataArr = [];
            let data_temp = data.split("*");
            // console.log(data_temp)
            data_temp.forEach((value) => {
                let temp = JSON.parse(value);
                dataArr.push(temp);
            })

            return dataArr;

        }

        // console.log("dataArr; ", dataArr)
    }
    catch (e) {
        console.log(e)
        return []
    }

}

export const UsernameToAvatar = (text: string) => {
    if (!!text)
    if (text.trim().length > 0){
        let text_arr = text.split(" ");
        if (text_arr.length == 1) {
            return text_arr[0][0]
        }
        else {
            return text_arr[0][0] + text_arr[text_arr.length - 1][0]
        }
    }
    else return ""
    
}