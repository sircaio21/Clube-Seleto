import { GET_NOTIFICATIONS } from "../actions/notificationActions"

const INTIAL_STATE = {
    notifications: [],
}


const notificationsReducer = (state = INTIAL_STATE, action) => {

    switch (action.type) {
        case GET_NOTIFICATIONS: {
            return {
                ...state,
                notifications: action.payload.notifications
            };

        }
        default:
            return state;


    }
};

export default notificationsReducer;