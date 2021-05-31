import React, { useEffect, useState } from 'react';
import './App.css';
import { Quizdata, Quiz } from './Quizdata';
import firebase from './firebase';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function App() {
    const messages = firebase.messaging();
    messages.requestPermission().then(() => {

        return messages.getToken();
    }).then((token) => {
        console.log(token);
    })
    const [answer, setAnswer] = useState < string>('');
    const [quiz, setQuiz] = useState<Quiz[]>([]);
    const [count, setCount] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    useEffect(() => {
        async function allData() {
            const data: Quiz[] = await Quizdata();
            console.log(data);
            return setQuiz(data);
        }
        allData();

    }, []);
    const handleClick = (e: React.FormEvent<EventTarget>, value: string) => {
        e.preventDefault();
        // console.log(value);
        if (value === quiz[count].correct_answer) {
            setScore(() => score + 1);
        }
        setCount(() => count + 1);
    }
    if (quiz.length === 0) {
       
            return (
                <>
                    <h1>Loading...</h1>
                </>
            );
       
    }
    if (count >= quiz.length) {
        return (
            <div style={{ paddingTop: '5em' }}>
                <Card
     
                    text='white'
                    style={{ width: '18rem', margin: '0 auto', height: '15rem', backgroundColor: "green" }}
                    className="mb-2 card"
                >
                    <Card.Title style={{ margin:"0 auto" }}>Result </Card.Title>
                    <Card.Body style={{ marginTop: '4em' }}>
                        <Card.Title>OBTAINED MARKS : {score} </Card.Title>
                        <Card.Title>TOTAL MARKS : {quiz.length} </Card.Title>
                    </Card.Body>
                </Card>
            </div>
        
        );
    }       
    else {
        //console.log(quiz[count].incorrect_answers[2]);

        return (
            <>
            <div className="App" style={{margin:'0 auto'}}>
                    <h1 >QUIZ TEST</h1>
                    <Card border="secondary" style={{ width: '40rem', margin:'0 auto' }} className='card'>
                   
                    <Card.Body>
                        <Card.Title> <h1>{quiz[count].question}</h1></Card.Title>
                        <Card.Text>
                            <form onSubmit={(e) => handleClick(e, answer)} id='form'>
                                {
                                    quiz[count].incorrect_answers.map((option, ind) => {
                                        // console.log(option);
                                        return (
                                            <div key={ind}>

                                                <input type='radio' name='option' value={option} onChange={() => setAnswer(option)} required checked={answer === option} />{option}
                                            </div>
                                        );
                                    })
                                    }
                                    <Button variant="primary" size="sm" block type='submit' value='Next'>
                                        NEXT
                                     </Button>
                               
                            </form>
                         </Card.Text>
                     </Card.Body>
                </Card>
                <br />    
                </div>
                </>
        );
    }
}

export default App;
