import * as React from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button  from "react-bootstrap/Button";
import Stack from '@mui/material/Stack';
import {useState} from "react";

import "../ToDoing.css";

function ToDoing() {

    const [showAlert, setShowAlert] = useState(false);

    const toggle = () => {
        alert("You have clicked this you can close now" + setShowAlert(showAlert));
    }
        
    return (
        <div className='To-Doing'>
            <div className="form">
                <div className="buttons-group-row">
                    {/* Stack is a  */}
                    <Stack direction="row" spacing={0.5}>
                        <Button variant='primary' onClick={toggle}>Add/Tambahkan</Button>
                        <Button variant='danger'>Delete/Hapus</Button>
                    </Stack>    
                </div
            </div>
        </div>
    )
}

export default ToDoing;
