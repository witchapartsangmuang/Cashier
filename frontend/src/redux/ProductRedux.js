import axios from 'axios'

const DEFAULT_STATE = {
    Product: []
}

export const Product = {
    state: DEFAULT_STATE,
    reducers: {
        SET_PRODUCT(state, payload) {
            return { ...state, Product: payload }
        }
    },
    effects: (dispatch) => ({
        async fetchproduct(payload) {
            axios.get(`http://localhost:8080/GetProduct`, {
                params: {
                    cateId: payload.cateId
                }
            }).then((response) => {
                dispatch.Product.SET_PRODUCT(response.data)
            }).catch((err) => { console.log(err) })
        }
    })
}