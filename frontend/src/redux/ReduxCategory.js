import axios from 'axios'

const DEFAULT_STATE = {
    Category: [],
}

export const Category = {
    state: DEFAULT_STATE,
    reducers: {
        SET_CATEGORY(state, payload) {
            return { ...state, Category: payload }
        }
    },
    effects: (dispatch) => ({
        async fetchCategory(payload) {
            axios.get(`http://localhost:8080/GetCategory`)
                .then((response) => {
                    dispatch.Category.SET_CATEGORY(response.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    })
}
