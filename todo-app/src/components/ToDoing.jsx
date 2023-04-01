import * as React from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {Button}  from "react-bootstrap";
import Stack from '@mui/material/Stack';

import {useState} from "react";
// An input from mui that require for user type their activies list.
import Input  from '@mui/joy/Input';

// for manual styling background, that doesnt need another 3rd party libraries.
import "../ToDoing.css";


function ToDoing() {
    return (
        <div className='To-Doing-App'>
            <div className='Container'>
                    <Container maxWidth="sm">
                        <div id="header-title-ToDoing">
                            <header className="text-md-center" style = {{ fontStyle: "italic", color: "#800080" }}>
                                <h3> ToDoing App By Mystereyn!</h3>
                            </header>
                        </div>
                        <div id="input-activity/ies">
                            <Input placeholder='Type your activy/ies here'
                                   variant="outlined"
                                   color="neutral">
                            </Input>
                        </div>
                        <div className='btn'>
                            <span className="buttons-row">
                                <Box sx={{
                                    py:2,
                                    display: 'grid',
                                    gap:2,
                                    alignItems: 'center',
                                    flexWrap: 'wrap'
                                }}/>
                                <Stack direction="row" spacing={0.5}>
                                    <Button variant='primary'>Add/Tambahkan</Button>
                                    <Button variant='danger'>Delete/Hapus</Button>
                                </Stack>
                            </span>
                        </div>
                    </Container>           
            </div>
        </div>
    )
}

export default ToDoing;
