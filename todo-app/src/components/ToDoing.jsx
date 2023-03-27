import react from 'react';
import {
    Button,
    Card,
    Form,
    InputGroup
}from 'react-bootstrap';
import "../ToDoing.css";
function ToDoing() {
    return (
        <div className="To-Doing-App">
            <header className="todo-header">
                <i><h2 className="text-lg-center"> A simple ToDoing by Mystereyn</h2></i>
            </header>
            <div className='Form'>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder='What activity that you want add?'>
                    </Form.Control>
                </InputGroup>
            </div>
        </div>
    )
}

export default ToDoing;
