import { Chip } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'

const Genres = ({
    selectedGenres,
    genres,
    setSelectedGenres,
    setGenres,
    setPage,
    type
}) => {

  const handleAdd = (genre) =>{
     setSelectedGenres([...selectedGenres, genre]);
     setGenres(genres.filter((g) => g.id !== genre.id));
     setPage(1);
  }

  const handleRemove = (genre) =>{
    setSelectedGenres(selectedGenres.filter((g) => g.id !== genre.id));
    setGenres([...genres, genre] );
    setPage(1);
 }

    const fetchGenres = async () =>{
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        setGenres(data.genres);

    }

    useEffect(() => {
      fetchGenres();
    
      return () => {
        setGenres([])
      }
    }, [])
    
  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres && selectedGenres.map((genre) => (

        <Chip
          style={{ margin: 2}}
          label={genre.name}
          size='small'
          color='primary'
          key={genre.id}
          clickable
          onDelete={()=> handleRemove(genre)}
        />
      ))}
        {genres && genres.map((genre) =>(

            <Chip
                style={{margin: 2, backgroundColor: 'white'}}
                label={genre.name}
                size='small'
                key={genre.id}
                clickable
                onClick={() => handleAdd(genre)}
            />
        ))}
    </div>
  )
}

export default Genres