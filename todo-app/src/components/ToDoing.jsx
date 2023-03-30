import * as React from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {Button,Alert}  from "react-bootstrap";
import Stack from '@mui/material/Stack';
import {useState} from "react";

import "../ToDoing.css";

function ToDoing() {

    // const [showAlert, setShowAlert] = useState(false);
    // const toggle = () => {
    //     alert("You have clicked this you can close now");
    // }
    
    // make a variable that for saving a value which is that for inline styling
    // header
    const headerStyling = {
        color: "#5B33FF",
        textAlign: "center",
        fontFamily : 'roboto'
    }
    return (
        <div className='To-Doing'>
            <div className="form">
                <div id="header-title-ToDoing">
                    <header style={headerStyling}> ToDoing App By Mystereyn!</header>
                </div>
                <span className="buttons-row">
                    <Stack direction="row" spacing={0.5}>
                        {/* <Button variant='primary' onClick={toggle}>Add/Tambahkan</Button> */}
                        <Button variant='primary'>Add/Tambahkan</Button>
                        <Button variant='danger'>Delete/Hapus</Button>
                    </Stack>
                </span>
            </div>
        </div>
    )
}

export default ToDoing;
