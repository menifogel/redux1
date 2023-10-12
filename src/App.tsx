import { Provider } from 'react-redux'; 
import { store } from './app/store';
import './App.css'
import Header from './components/Header';
import AnimalSelector from './components/AnimalSelector'
import TextInput from './components/TextInput'

function App() {

  return (
    <>
      <Provider store={store}>
        <div>
            <Header/>
            <AnimalSelector />
            <br/>
            <TextInput/>
        </div>

      </Provider>
        
      
    </>
  )
}

export default App
