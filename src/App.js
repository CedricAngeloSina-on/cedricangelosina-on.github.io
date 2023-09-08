import React, { useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParallax, useParallaxController } from 'react-scroll-parallax';

//images
import Suisei from './assets/images/suisei.jpg';
//scripts
import { CreateGrid } from './assets/scripts/CreateGrid';
//styles
import './assets/styles/gradient-bg.css';

function App() {
    const styles = {
        section: {
            width: '100%',
            height: '50%',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            overflowX: 'auto',
        },
        imageTrack: {
            display: 'flex',
            gap: '15px',
            userSelect: 'none',
            flexDirection: 'row',
            height: '100%',
            alignItems: 'center',
        },
        image: {
            width: '20vw',
            height: '90%',
            objectFit: 'cover',
            objectPosition: '100% center',
        },
    };

    const tilesRef = useRef(null);
        useEffect(() => {
            // Call the createGrid function and pass tilesRef
            const cleanup = CreateGrid(tilesRef);

            return cleanup; // Return the cleanup function
    }, []);

    return (
        <Box className="body">
            <Box ref={tilesRef} className="tiles"/> {/* grid background */}
            
            {/* Wrapper for 2 sections */}
            <Box 
                sx={{   width: '100vw', 
                        height: '100vh', 
                        backgroundAttachment: 'fixed', 
                        overflow: 'hidden',
                        zIndex: 2,
                        display: 'flex',
                        position: 'absolute',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                }}
            >
                {/* Top section with text and image */}
                <Box sx={{...styles.section}}>
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
                <Box sx={{...styles.section}}>
                    <Box sx={{...styles.imageTrack}} >
                        <img style={styles.image} src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" draggable="false" />
                        <img style={styles.image} src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" alt="" draggable="false" />
                        <img style={styles.image} src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" draggable="false" />
                        <img style={styles.image} src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" draggable="false" />
                        <img style={styles.image} src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" draggable="false" />
                        <img style={styles.image} src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" alt="" draggable="false" />
                        <img style={styles.image} src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80" alt="" draggable="false" />
                        <img style={styles.image} src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" draggable="false" />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default App;
