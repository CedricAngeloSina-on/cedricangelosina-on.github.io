import React, { useRef, useEffect } from 'react';
import { Box, Card } from '@mui/material';
import './gradient-bg.css';
import JV from './JV.png';

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

        <Box className="container">
            <Box className="child">
                <Box className="child-content">
                    <Box className="top-left">
                        <img src={JV} alt="" width="300" />\
                    </Box>
                </Box>
            </Box>
                <Box className="child">
                    <Box className="child-content">
                    </Box>
            </Box>
        </Box>
    </Box>




  );
}

export default App;
