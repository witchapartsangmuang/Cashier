import axios from 'axios'

const DEFAULT_STATE = {
    Category: [],
    // START CategoryDetail
    CateId: [],
    CateName: [],
    CateImg: [],
    CateIsActive: []
    // END CategoryDetail
}

export const Category = {
    state: DEFAULT_STATE,
    reducers: {
        SET_CATEGORY(state, payload) {
            return { ...state, Category: payload }
        },
        SET_CATE_ID(state, payload) {
            return { ...state, CateId: payload }
        },
        SET_CATE_NAME(state, payload) {
            return { ...state, CateName: payload }
        },
        SET_CATE_IMG(state, payload) {
            return { ...state, CateImg: payload }
        },
        SET_CATE_ACTIVE(state, payload) {
            return { ...state, CateIsActive: payload }
        },
    },
    effects: (dispatch) => ({
        async fetchCategory(payload) {
            axios.get(`http://localhost:8080/GetCategory`
            , {
                params: {
                    // cateId: payload.cateId,
                    urlpath: payload.urlpath,
                    // activefilter: payload.activefilter
                }
            }
            ).then((response) => {
                dispatch.Category.SET_CATEGORY(response.data)
            }).catch((err) => {
                console.log(err)
            })
        },
        async fetchcategorydetail(payload) {
            axios.get(`http://localhost:8080/GetCategoryDetail`, {
                params: {
                    CateId: payload.CateId
                }
            }).then((response) => {
                console.log(response.data);
                dispatch.Category.SET_CATE_ID(response.data[0].CateId)
                dispatch.Category.SET_CATE_NAME(response.data[0].CateName)
                dispatch.Category.SET_CATE_IMG(response.data[0].CateImg)
                dispatch.Category.SET_CATE_ACTIVE(response.data[0].CateIsActive)
            }).catch((err) => { console.log(err) })
        },

        async editCateId(payload) {
            dispatch.Category.SET_CATE_ID(payload.editCateId)
        },
        async editCateName(payload) {
            dispatch.Category.SET_CATE_NAME(payload.editCateName)
        },
        async editCateImg(payload) {
            dispatch.Category.SET_CATE_IMG(payload.editCateImg)
        },
        async editCateIsActive(payload) {
            dispatch.Category.SET_CATE_ACTIVE(payload.editIsActive)
        }
    })
}
