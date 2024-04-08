import { useState, useEffect } from 'react';

const useFecthCharacters = (url)=>{
    const [character, setCharacter] = useState(null);
    const [image, setImage] = useState(null)
    const findCharacter = async()=>{
      try {
        const response = await fetch(url)
        const data = await response.json()
        setCharacter(data.name)
        data.image ? setImage(data.image) : setImage(data.sprites.other.dream_world.front_default)
      } catch (error) {
            console.error('error de conexión', error)
      }
    }    
  
    useEffect(()=>{
      findCharacter();
    }, [])
  
    return{
      character,image
    }  
  
  }

  export default useFecthCharacters