import { useState, useEffect } from "react";

function CountDownTimer() {

  const [seconds, setSeconds] = useState(10);

  const [timeLeft, setTimeLeft] = useState(10);

  const [isRunning, setIsRunning] = useState(false);


  useEffect(() => {

    let timer;

    if (isRunning && timeLeft > 0) {

      timer = setInterval(() => {

        setTimeLeft((prev) => prev - 1);

      }, 1000);

    }


    if (timeLeft === 0) {

      setIsRunning(false);

    }


    return () => clearInterval(timer);

  }, [isRunning, timeLeft]);



  function startTimer() {

    setTimeLeft(seconds);

    setIsRunning(true);

  }



  function stopTimer() {

    setIsRunning(false);

  }



  function resetTimer() {

    setIsRunning(false);

    setTimeLeft(seconds);

  }



  return (

    <div>

      <h1>Countdown Timer</h1>


      <label>
        Set Time (seconds):
      </label>


      <input

        type="number"

        value={seconds}

        onChange={(e) => 
          setSeconds(Number(e.target.value))
        }

      />


      <h2>
        Time Left: {timeLeft} seconds
      </h2>



      <button 
        onClick={startTimer}
        disabled={timeLeft === 0 || isRunning}
      >
        Start
      </button>



      <button 
        onClick={stopTimer}
        disabled={timeLeft === 0 || !isRunning}
      >
        Stop
      </button>



      <button 
        onClick={resetTimer}
      >
        Reset
      </button>


    </div>

  );

}

export default CountDownTimer;