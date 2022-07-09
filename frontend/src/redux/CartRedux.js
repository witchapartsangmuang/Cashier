import axios from 'axios'

const DEFAULT_STATE = {
    Cart: [],
    Summary: 0
}

export const Cart = {
    state: DEFAULT_STATE,
    reducers: {
        SET_CART(state, payload) {
            return { ...state, Cart: payload }
        },
        SET_SUMMARY(state, payload) {
            let Summary = 0
            payload.map((prod) => {
                return Summary += prod.Total
            })
            return { ...state, Summary: Summary }
        }
    },
    effects: (dispatch) => ({
        async fetchCart(payload) {
            axios.get(`http://localhost:8080/GetCart`)
                .then((response) => {
                    dispatch.Cart.SET_CART(response.data)
                    dispatch.Cart.SET_SUMMARY(response.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    })
}