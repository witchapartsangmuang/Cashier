import * as models from "./redux_root"
import persistPlugin from '@rematch/persist'
import { init } from '@rematch/core'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'Cashier',
    storage,
    whitelist: ['auth']
}

const Cashier = init({ models, plugins: [persistPlugin(persistConfig)] })

export default Cashier