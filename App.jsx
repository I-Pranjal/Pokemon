import { useEffect, useState } from 'react'
import './App.css'
import Card from './card';


function App() {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [fitleredList, setFilteredList] = useState([]); 
  const [pokemon , setpokemon] = useState([]); 

  useEffect(() => {
    const fetchPokemon = async() => {
      try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon') ;
        if(!response.ok){
          throw new Error('Network response not good'); 
        }
        const data = await response.json(); 
        console.log(data.results);
        setpokemon(data.results); 
      }
      catch(error){
          console.error('Failed to fetch pokemon'); 
      }
    }
    fetchPokemon(); 
  }, []); 

  useEffect (() => {
    setFilteredList(
      pokemon.filter((p) => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, pokemon]); 

  return (
  <>
    <p style={{color:'red'}}>
      Note : The image URL was not working properly so I could not display the image. 
    </p>

    <input
        style={{width:'80vw', height:'3vw', fontSize:'32px', borderRadius:'25px', padding:'5px'}}
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
  <div style={{display:'flex', overflow:'scroll'}}>
  {fitleredList.map((pokemon, index) =>(
    <Card name={pokemon.name} />
  ))}
  
    </div>
  </>
  )
}

export default App
