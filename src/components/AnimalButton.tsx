import { useAppDispatch } from '../app/hooks';
import { setAnimalByPayload } from '../app/animalSlice';
import Button from '@mui/material/Button';
import {useState} from 'react'

interface Props {
  animal: string;
}

function AnimalButton({ animal }: Props) {
  const dispatch = useAppDispatch();
  const [color, setColor] =useState('primary')


  const handleClick = () => {
    dispatch(setAnimalByPayload(animal));
    setColor('secondary');
  }
  
  return (
    <Button 
      variant="contained"
      color={color}
      onClick={handleClick}
    >
      {animal}
    </Button>
  );
}

export default AnimalButton;