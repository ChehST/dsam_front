'use client'
import { useState, useEffect } from "react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(
    new Date("2023-03-20T12:46:13Z").getTime() - Date.now()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1000);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div>
      <p>Успейте записаться до окончания набора в группу</p>
      <p>
        {days} дней {hours} часов {minutes} минут {seconds} секунд
      </p>
    </div>
  );
}

export default Countdown;