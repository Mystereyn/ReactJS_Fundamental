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

    // need a state variable using state hook reactjs, 
    // the parentheses here is a meanly for default value
    const [userInputValue, setUserInputValue] = useState('');

    // when button clicked by user, and user see the result of value at the console
    // browser. thanks chatGPT.
    const userSubmit = () => {
        console.log(userInputValue);
    }
    const userReset = () => {
        setUserInputValue('');
    }

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
                                   color="neutral"
                                   value={userInputValue}
                                   onChange={(eventFill) => setUserInputValue(eventFill.target.value)}>
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
                                    <Button variant='primary' onClick={userSubmit}>Add/Tambahkan </Button>
                                    <Button variant="danger" onClick={userReset}>Reset/Diulang</Button>
                                </Stack>
                            </span>
                        </div>
                    </Container>           
            </div>
        </div>
    )
}

export default ToDoing;
