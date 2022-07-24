import logo from './logo.svg';
import './App.css';



function WhoAmI ({name, surname, link}) {
  return (
    <div>
      <h1>My name is {name()} , surname - {surname} </h1>
      <a href={link}>My profile</a>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      {/* <WhoAmI name='John' surname='Smith' link='facebook.com'/> */}
      {/* <WhoAmI name={{firstName: 'Alex'}} surname='Shepard' link='vk.com'/> */}
      <WhoAmI name={() => {return 'John'}} surname='Smith' link='facebook.com'/>
    </div>
  );
}

export default App;
