import axios from 'axios'

const DEFAULT_STATE = {
    Product: [],
    // START ProductDetail
    ProdId: [],
    ProdName: [],
    ProdDesc: [],
    ProdPrice: [],
    ProdBarcode: [],
    ProdCateId: [],
    ProdIsActive: []
    // END ProductDetail
}

export const Product = {
    state: DEFAULT_STATE,
    reducers: {
        SET_PRODUCT(state, payload) {
            return { ...state, Product: payload }
        },
        SET_PRODUCT_DETAIL(state, payload) {
            return { ...state, ProductDetail: payload }
        },

        SET_PROD_ID(state, payload) {
            return { ...state, ProdId: payload }
        },
        SET_PROD_NAME(state, payload) {
            return { ...state, ProdName: payload }
        },
        SET_PROD_DESC(state, payload) {
            return { ...state, ProdDesc: payload }
        },
        SET_PROD_PRICE(state, payload) {
            return { ...state, ProdPrice: payload }
        },
        SET_PROD_BARCODE(state, payload) {
            return { ...state, ProdBarcode: payload }
        },
        SET_PROD_CATEID(state, payload) {
            return { ...state, ProdCateId: payload }
        },
        SET_PROD_ACTIVE(state, payload) {
            return { ...state, ProdIsActive: payload }
        }
    },
    effects: (dispatch) => ({
        async fetchproduct(payload) {
            axios.get(`http://localhost:8080/GetProduct`, {
                params: {
                    cateId: payload.cateId,
                    urlpath: payload.urlpath,
                    activefilter: payload.activefilter
                }
            }).then((response) => {
                dispatch.Product.SET_PRODUCT(response.data)
            }).catch((err) => { console.log(err) })
        },
        async fetchproductdetail(payload) {
            axios.get(`http://localhost:8080/GetProductDetail`, {
                params: {
                    ProdId: payload.ProdId
                }
            }).then((response) => {
                dispatch.Product.SET_PROD_ID(response.data[0].ProdId)
                dispatch.Product.SET_PROD_NAME(response.data[0].ProdName)
                dispatch.Product.SET_PROD_DESC(response.data[0].ProdDesc)
                dispatch.Product.SET_PROD_PRICE(response.data[0].ProdPrice)
                dispatch.Product.SET_PROD_BARCODE(response.data[0].ProdBarcode)
                dispatch.Product.SET_PROD_CATEID(response.data[0].CateId)
                dispatch.Product.SET_PROD_ACTIVE(response.data[0].ProdIsActive)
            }).catch((err) => { console.log(err) })
        },

        async editProdId(payload) {
            dispatch.Product.SET_PROD_ID(payload.editProdId)
        },
        async editProdName(payload) {
            dispatch.Product.SET_PROD_NAME(payload.editProdName)
        },
        async editProdDesc(payload) {
            dispatch.Product.SET_PROD_DESC(payload.editProdDesc)
        },
        async editProdPrice(payload) {
            dispatch.Product.SET_PROD_PRICE(payload.editProdPrice)
        },
        async editProdBarcode(payload) {
            dispatch.Product.SET_PROD_BARCODE(payload.editProdBarcode)
        },
        async editProdCateId(payload) {
            dispatch.Product.SET_PROD_CATEID(payload.editProdCateId)
        },
        async editProdIsActive(payload) {
            dispatch.Product.SET_PROD_ACTIVE(payload.editIsActive)
        }
    })
}