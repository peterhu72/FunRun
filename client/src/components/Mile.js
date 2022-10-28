import '../App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Mile = () => {
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    const [allTimes, setAllTimes] = useState([]);
    const [currNumber, setCurrNumber] = useState(0);

    useEffect(() => {
        let interval = null;
    
        if (timerOn) {
            interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!timerOn) {
            clearInterval(interval);
        }
    
      return () => clearInterval(interval);
      }, [timerOn]);
    
      const timeHandler = (event) => {
        event.preventDefault();
        setCurrNumber(currNumber + 1);
        axios.post("http://localhost:8000/api/times", {timing: time, number: currNumber, whichRun: 1})
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      }
    
      useEffect(() => {
        axios.get("http://localhost:8000/api/times")
        .then(res => {
          console.log(res)
          setAllTimes(res.data.results);
        })
        .catch(err => {
          console.log(err)
        })
      })

    return (
        <div>
              <div className="content">
        <h2 className='text_shadows'>Mile Run!!!</h2>
        <div id="display" className='text_shadows'>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>

    <div id="buttons">
        {!timerOn && time === 0 && (
        <button onClick={() => setTimerOn(true)} className="btn">Start</button>
        )}
        {timerOn &&
        <div>
          <button onClick={() => setTimerOn(false)} className="btn">Stop</button> 
          <button onClick={timeHandler} className="btn">Record Time</button>
        </div>
        }
        {!timerOn && time > 0 && (
        <button onClick={() => setTime(0)} className="btn">Reset</button>
        )}
        {!timerOn && time > 0 && (
        <button onClick={() => setTimerOn(true)} className="btn">Resume</button>
        )}
    </div>
    <h1 className="text_shadows">{time / 1000}</h1>
    
    <div className='flex'>
      {
        allTimes.map(t => {
          return (
            t.whichRun === 1 ?
              <h1 key={t.timing} className="">| {t.number}: {t.timing / 1000} |</h1>
              : <></>
          )
        })
      }
    </div>
    
</div>

        </div>
    );
};

export default Mile;