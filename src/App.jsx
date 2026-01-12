import { useState, useEffect } from 'react'
import CardList from './components/card list/card-list.component';
import SearchBox from './components/search box/search_box.component';
import './App.css';

const App =() =>{
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]); /// filteredCats : []  
  const [ CardState, setCardState]=useState(false)
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
      // console.log(newFilteredCats)
        setFilteredCats(newFilteredCats);

      if (searchString && newFilteredCats.length===0){
        setCardState(true);
      }
      else{
        setCardState(false);
      }
    };
  let value;

  if (CardState) {
    value = <h2 className='message'>Cats Not Found</h2>;
  }
  else {
    value= <CardList cats={filteredCats} />;
  }

  return (
    <div className='app-container'> 
      <h1 className='app-title'>Cats Rolodex</h1>
      <SearchBox ChangeHandler={OnSearch} />
      {value}

    </div>

  );
};

export default App;