import { GET_USERS } from "../ActionsType/actionsTypes";

const initialState = {
    users: [],
};

export const apiReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USERS:
            return {
                ...state,
                // kenet : [user,setUser]=useState([])
                // o kii tarjaa el res nabii el tab bii setUser(res.data)
                //houni el payload : res.data
                users: payload,
            };

        default:
            return state;
    }
};
