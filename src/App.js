import React, { useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import './gradient-bg.css';
import Suisei from './suisei.jpg';
import Lasi from './lasi.jpg';

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
        <Box ref={tilesRef} className="tiles"/> {/* grid background */}
        
        {/* Wrapper for 2 sections */}
        <Box sx={{  width: '100vw', 
                    height: '100vh', 
                    backgroundAttachment: 'fixed', 
                    overflow: 'hidden',
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
            }}
        >
            {/* Top section with text and image */}
            <Box sx={{  width: '100%', 
                        height: '50%', 
                        whiteSpace: 'nowrap', 
                        display: 'flex', 
                        alignItems: 'center',
                        overflowX: 'auto',
                }}
            >
                <Box sx={{  width: '66%', 
                            display: 'flex',    
                            height: '100%', 
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                >
                    <Box sx={{  width: '80%', 
                            height: '50%', 
                        }}
                    >
                        <Typography variant='h3'
                                    sx={{  fontFamily: 'Rubik, sans-serif', fontWeight: '900', color: 'white', fontStyle: 'semibold',
                                    }}>
                            Hi, I'm Cedric!
                        </Typography>
                        <Typography variant='h1'
                                    sx={{  fontFamily: 'Rubik, sans-serif', fontWeight: '900', color: 'white', fontStyle: 'semibold',
                                }}>
                            I make bad designs.
                        </Typography>
                        <Typography variant='h3'
                                    sx={{  fontFamily: 'Rubik, sans-serif', fontWeight: '600', color: 'white',
                                }}>
                            And I stole this code from someone else. Ehe
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{  width: '34%', 
                            height: '100%', 
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-end',     
                        }}
                >      
                    <img
                        src={Suisei} 
                        style={{
                        border: '10px solid rgb(15, 15, 15)',
                        borderRadius: '25px',
                        maxWidth: '80%',  
                        maxHeight: '80%',   
                        borderSpacing: '20px',
                        }}
                    />
                </Box>
            </Box>

            {/* Bottom section with image track*/}
            <Box sx={{  width: '100%', 
                        height: '50%', 
                        whiteSpace: 'nowrap', 
                        display: 'flex', 
                        alignItems: 'center',
                        overflowX: 'auto',
                }}
            >
                <Box className="child-content" >
                    <div id="image-track" >
                        <img class="image" src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
                        <img class="image" src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" draggable="false" />
                        <img class="image" src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
                        <img class="image" src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
                        <img class="image" src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
                        <img class="image" src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" draggable="false" />
                        <img class="image" src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80" draggable="false" />
                        <img class="image" src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
                    </div>
                </Box>
            </Box>
        </Box>
    </Box>
  );
}

export default App;
