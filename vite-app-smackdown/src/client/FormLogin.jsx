import { useEffect, useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Alert } from "@mui/material";
import {Stack } from "@mui/material";

import axios from "axios";

// import  "./style/style.css";

export default function FormLogin() {
    const [userLogin, setUserLogin] = useState("");


    useEffect(()=>{
        // <Alert severity="info">{welcomeUser}</Alert>
         const welcome = setTimeout(()=> {setUserLogin(`Hello, please fill this form to direct another page!`)}, 100);
         return () => clearTimeout(welcome);
    }, []) // <<< react said, the array is only need for second state, because i was declaring the useState first.
    return (
        <div className="formPaper">
            <Stack spacing={3}>
                <Alert severity="info">{userLogin}</Alert>
                <FormControl id="userName">
                <FormLabel>E-mail Address
                    <input type="email" placeholder="E-mail..."/>
                </FormLabel>
                <FormControl id="passwordName">
                    <FormLabel>Password
                        <input type="password" placeholder="Password..."/>
                    </FormLabel>
                </FormControl>
            </FormControl>
            </Stack>
           
        </div>
    )
}