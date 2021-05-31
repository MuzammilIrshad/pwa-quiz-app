import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import App from './App';
import './App.css';


export default function Getstarted() {

    const [start, setStart] = useState(false);
    const [color, setColor] = useState('')
    const handleClick = () => {
        setColor('success');
        setTimeout((() => {
            setStart(true);
        }), 500)
    }

    if (!start) {
        return (
            <div style={{ paddingTop: '5em' }}>
            <Card 
                bg={color}
                text='white'
                style={{ width: '18rem', margin:'0 auto', height:'15rem'}}
                className="mb-2 card"
                >
                    <Card.Body style={{ marginTop:'4em' }}>
                    <Card.Title> <Button variant="primary" size="sm" block onClick={handleClick}>
                        GET STARTED
                  </Button></Card.Title>

                </Card.Body>
            </Card>
                </div>
        )
    }
    else {
        return <App/>
    }
}
