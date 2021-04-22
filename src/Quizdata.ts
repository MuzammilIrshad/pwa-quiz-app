import React from 'react';

export type Quiz = {
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
} 

export async function Quizdata(): Promise<Quiz[]> {
    const data = await fetch(`https://opentdb.com/api.php?amount=5&category=10&difficulty=easy&type=multiple`);
    let { results } = await data.json();
    // console.log(results);
    const quiz:Quiz[] = results.map((question:Quiz) => {
        return {
            question: question.question,
            correct_answer: question.correct_answer,
            incorrect_answers: [...question.incorrect_answers, question.correct_answer]
        }
    })
    console.log(quiz);
    return quiz;
}