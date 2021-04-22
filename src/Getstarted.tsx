import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import App from './App';



export default function Getstarted() {

    const [start, setStart] = useState(false);
    const [color, setColor] = useState('warning')
    const handleClick = () => {
        setColor('success');
        setTimeout((() => {
            setStart(true);
        }), 1000)
    }

    if (!start) {
        return (
            <div style={{ paddingTop: '5em' }}>
            <Card 
                bg={color}
                text='white'
                style={{ width: '18rem', margin:'0 auto', height:'15rem'}}
                className="mb-2"
                >
                    <Card.Body style={{ marginTop:'4em' }}>
                    <Card.Title> <Button variant="primary" size="sm" block onClick={handleClick}>
                        Block level button
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
