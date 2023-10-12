// import Header from '@mui/material'
import {useAppDispatch, useAppSelector} from '../app/hooks';
import { setAnimalByPayload } from '../app/animalSlice';


export default function Header() {
    const dispatch = useAppDispatch()
    const animal = useAppSelector((state) => state.animal.value)
  return (
    <>
       <h1>החיה שנבחרה :  {animal} </h1>
    </>
    
  )
}
