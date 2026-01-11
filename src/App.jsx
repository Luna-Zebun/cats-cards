import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import CardList from './components/card list/card-list.component';
import SearchBox from './components/search box/search_box.component';
import './App.css';

const App =() =>{
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]); /// filteredCats : []
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((data) => {
        setCats(data);
        setFilteredCats(data) });
      },[])

    const OnSearch=(event) => {
      const searchString=event.target.value.toLowerCase(); 
      const newFilteredCats=cats.filter(( cat ) => cat.name.toLowerCase().includes(searchString)); ///newFilteredCats: [] 
      setFilteredCats(newFilteredCats);
    };
  return (
    <div className='app-container'> 
      <h1 className='app-title'>Cats Rolodex</h1>
      <SearchBox ChangeHandler={OnSearch} />
      <CardList cats={ filteredCats } />
      
    </div>

  );
};

export default App;