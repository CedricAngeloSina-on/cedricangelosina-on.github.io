import React, { useRef, useEffect } from 'react';
import { Box, Paper } from '@mui/material';
import './gradient-bg.css';

function App() {
  const tilesRef = useRef(null);

  useEffect(() => {
    const wrapper = tilesRef.current;

    let columns = Math.floor(document.body.clientWidth / 50);
    let rows = Math.floor(document.body.clientHeight / 50);

    const createTile = (index) => {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      return tile;
    };
    const createTiles = (quantity) => {
      Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
      });
    };

    const createGrid = () => {
      wrapper.innerHTML = "";
      columns = Math.floor(document.body.clientWidth / 50);
      rows = Math.floor(document.body.clientHeight / 50);
      wrapper.style.setProperty("--columns", columns);
      wrapper.style.setProperty("--rows", rows);

      createTiles(columns * rows);
    };

    createGrid();
    window.onresize = () => createGrid();

    return () => {
      window.onresize = null;
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <Box className="body">
      <Box ref={tilesRef} className="tiles">
      </Box>

    {/* <Box>
    <Paper
            className="centered"
            sx={{
              border: '1px solid #ccc',
              overflow: 'auto',
              width: 4800,
              height: 300,
              zIndex:2,
              backgroundColor: 'black',
              color: 'white',
            }}
          > 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
saddddddddddddddddddddd
          </Paper>
    </Box> */}
            
    </Box>
  );
}

export default App;
