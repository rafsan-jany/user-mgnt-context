import './App.css';
import Users from './components/Users';
import NewUser from './components/NewUser';
import UsersProvider, { UsersContext } from './context/UsersContext';

function App() {

  return (
    <UsersProvider>
      <div className="App">
        <NewUser/>
        <Users/>
      </div>
    </UsersProvider>
  );
}

export default App;
