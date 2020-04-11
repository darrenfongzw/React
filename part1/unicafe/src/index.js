import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    // const {good, bad, neutral} = props;
    if (props.first && props.total === 0) {
        return (
            <>
                <p>No Statistics Available</p>
            </>
        )
    } else if (!props.first && props.total === 0) {
        return (
            <></>
        )
    }
    return (
        <>
            {/*<h2>Statistics</h2>*/}
            <p>{props.text} = {props.value}</p>
        </>
    )
    // } else
    //     return (
    //         <div>
    //             <h2>Statistics</h2>
    //             <p>No Feedback Given</p>
    //         </div>)
};

const Button = (props) => {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    )

};

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);


    return (
        <div>
            <h2>Give feedback</h2>
            <Button onClick={() => setGood(good + 1)} text={"good"}/>
            <Button onClick={() => setNeutral(neutral + 1)} text={"neutral"}/>
            <Button onClick={() => setBad(bad + 1)} text={"bad"}/>

            <div>
                <Statistics first={true} text={"good"} value={good} total={good + bad + neutral}/>
                <Statistics first={false} text={"neutral"} value={neutral} total={good + bad + neutral}/>
                <Statistics first={false} text={"bad"} value={bad} total={good + bad + neutral}/>
                <Statistics first={false} text={"all"} value={good + bad + neutral} total={good + bad + neutral}/>
                <Statistics first={false} text={"average"} value={(good - bad)/(good + bad + neutral)} total={good + bad + neutral}/>
                <Statistics first={false} text={"positive"} value={""+good/(good + bad + neutral)*100+"%"} total={good + bad + neutral}/>

            </div>
        </div>
    )
}

ReactDOM.render(<App/>,
    document.getElementById('root')
)