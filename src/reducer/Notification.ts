import Alert from 'react-s-alert';

const initialState = {

}

const Notification = (state = initialState, action) => {
    switch (action.type) {

        case "ALERT_ERROR":
            Alert.error(action.msg, {
                position: 'top-right',
                effect: 'slide',
                timeout: 3000,
            });
            return { ...state }

        case "ALERT_SUCCESS":
            Alert.success(action.msg, {
                position: 'top-right',
                effect: 'slide',
                timeout: 3000,
            });
            return { ...state }

        default:
            return state
    }
}

export default Notification;