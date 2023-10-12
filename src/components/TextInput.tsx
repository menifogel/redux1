import TextField from '@mui/material/TextField';
import { useAppDispatch } from '../app/hooks';
import { setAnimalByPayload } from '../app/animalSlice';

interface Props {
  animal: string;
}

function AnimalText({ animal }: Props) {
  const dispatch = useAppDispatch();


  const handleChange = (event :ChangeEvent<HTMLInputElement>) => {
    dispatch(setAnimalByPayload((event.target.value)));
  }
  
  return (
    <TextField
      onChange={handleChange}
    >
    </TextField>
  );
}

export default AnimalText;