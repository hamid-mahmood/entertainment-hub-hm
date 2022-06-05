import { createTheme, ThemeProvider } from '@mui/material/styles';
import  Pagination  from '@mui/material/Pagination'
import React from 'react'

const darkTheme = createTheme({
  palette:{
    type: 'dark',
  }
})

function CustomPagination({setPage, numOfPages = 10}) {

    const handlePageChange = (event,value) =>{
        console.log("Page : ",value);
        setPage(value);
        window.scroll(0,0);
    }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination onChange={handlePageChange} count={numOfPages} color="primary" />

      </ThemeProvider>
    </div>
  )
}

export default CustomPagination