import React, {useState} from 'react'
import './styles/App.css';

function App() {
  const [likes,setLikes] = useState(5); {/*сначала выводится значение, следом функция*/}
  
  function increment() {
    setLikes(likes+1)
  }

  function decrement() {
    setLikes(likes-1)
  }

  return (
    <div className="App">

      <h1 className = 'likes'>{likes}</h1>
      <button className = 'btn1' onClick={increment}>Increment</button>
      <button className = 'btn2' onClick={decrement}>Decrement</button>

      <p className='paragraph_name'>Тестовая страница</p>
      
      <div className='paragraph_content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos modi quod pariatur aut culpa eligendi, vel perspiciatis earum animi repellat quos quo quia incidunt repellendus quibusdam doloremque saepe voluptatibus alias! Numquam quaerat, dolorum ex quia ipsum blanditiis officia assumenda quasi rerum eveniet magni similique at repellendus temporibus labore suscipit soluta?
        <div className='box'></div>
        <div className='box2'></div>
      
      <a className='google' href='https://www.google.com/' target='new window'>google</a>
      |
      <a className='yandex' href='https://www.yandex.ru/' target='new window'>yandex</a>

      

      </div>
    </div>
  );
}

export default App;
