import {configureStore} from '@reduxjs/toolkit'
import animalReduser from './animalSlice'
export const store = configureStore({
    reducer: {
        animal : animalReduser
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch