import './App.css';
import axios from 'axios';


function App() {

  const userConfig = {
    username: "PedrooNietoo",
    password: "Pedro2711!"
  }
  axios.post('https://poc-intelbras.vercel.app/users/createUser', userConfig)
    .then(res => {
      alert(res.status)
      console.log(res)
    })

    .catch(error => {
      alert(error.status)
      console.log(error)
    })

  return (
    <div className="App">
      <p>{ }</p>
    </div>
  );
}

export default App;
