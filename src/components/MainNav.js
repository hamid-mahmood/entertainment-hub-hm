import React, {useEffect}  from 'react';
import { makeStyles } from '@material-ui/core';
//import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TVIcon from '@mui/icons-material/Tv';
import './MainNav.css';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        backgroundColor : '#2d313a',
        width: '100%',
        position : "fixed",
        bottom: 0,
        zIndex: 100,
    },
})

export default function SimpleBottomNavigation() {
    const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate(); 
  useEffect(()=>{
    if(value === 0){
        navigate('/');
    }
    else if(value === 1){
        navigate('/movies');
    }
    else if(value === 2){
        navigate('/series');
    }
    else if(value === 3){
        navigate('/search');
    }
  },[value])

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
        className={classes.root}
        sx={{
            "& .MuiBottomNavigation-root, .makeStyles-root-1, .css-1n896d7-MuiBottomNavigation-root": {
             backgroundColor : "#2d313a"
            }
          }}
      >
        <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction label="TV Series" icon={<TVIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        
      </BottomNavigation>
    </Box>
  );
}
