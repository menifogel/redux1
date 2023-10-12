import { createSlice } from '@reduxjs/toolkit'
import type {PayloadAction } from '@reduxjs/toolkit'

interface AnimalState {
    value: string
}

const initialState: AnimalState = {
    value: '',
}

export const animalSlice = createSlice({
    name: 'animals',
    initialState,
     reducers: {
        setAnimalByPayload: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    },
    })

export const setAnimalByPayload  = animalSlice.actions.setAnimalByPayload 
export default animalSlice.reducer