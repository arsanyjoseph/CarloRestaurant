import { ADD_DATA, receiveData } from "../actions/mainAction";

const initialState = {
    categories : []
}

export default function setData (state = initialState, action) {
    switch (action.type) {
        case ADD_DATA : 
        return {
            ...state,
                categories: {
                    ...action.data.categories
                },
                ...action.data
        }
        default: return state
    }

}