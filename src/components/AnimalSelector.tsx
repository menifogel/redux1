import  AnimalButton from './animalButton';

const animals1 = ['כלב', 'חתול', 'ציפור'];
const animals2 = ['פרה','קוף','תנין'];

function AnimalSelector() {
  return (
    <>
    <div>
      {animals1.map(animal => (
        <AnimalButton animal={animal}/>
      ))}
    </div>
    <br/>
    <div>
    {animals2.map(animal => (
      <AnimalButton animal={animal}/>
    ))}
  </div>
    </>
  );
}

export default AnimalSelector;