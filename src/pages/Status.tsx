import { FormEvent, useState } from "react";
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css';

export function Status(){
    const [newAnswer, setNewAnswer] = useState('')
    const [answers, setAnswers] = useState([
        'Concordo...',
        'Faz sentido ...',
        'Sim realmente ...'
    ])

    function createNewAnswer(event: FormEvent){
        event.preventDefault();
        if(newAnswer != ''){
            setAnswers([...answers, newAnswer]);
        }
        setNewAnswer('');
    }

    return(
        <main className="status">
          <Header title='Home' />
          <Tweet content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam vero voluptatem laudantium tempore, enim repellat beatae deleniti atque. Harum corrupti id nobis sit fuga a architecto dolores quo voluptatum nihil!" />
          <Separator />
          <form onSubmit={createNewAnswer} className='answer-tweet-form' action="">
            <label htmlFor="tweet">
              <img src="https://github.com/igorguigo.png" alt="Igor Tonelli" />
              <textarea
                id='tweet' 
                placeholder="Tweet your answer" 
                value={newAnswer}
                onChange={(event) => {
                    setNewAnswer(event.target.value)
                }}
            />
            </label>
            <button type='submit'>Answer</button>
          </form>
          {answers.map(answer => {
            return <Tweet key={answer} content={answer} />
          })}
        </main>
    )
}