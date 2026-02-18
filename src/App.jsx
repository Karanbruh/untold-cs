import { useEffect, useRef, useState } from "react";
import "./App.css";
import logo from "./assets/logo.png"
import midImg from "./assets/mid-img.jpeg"

function App() {

  const targetDate = useRef(
    new Date("2026-04-01T00:00:00").getTime()
  );

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate.current - now;

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      {/* LEFT SIDE */}
      <div className="left">
        <div className="content">
          <img src={logo} alt="logo" className="logo-img" />

          <div className="left-content">


            <p className="subtext">
              Stay Tuned <br />
              Our New Website Is
            </p>

            <h1 className="title">COMING SOON</h1>

            <div className="timer">
              <span>{timeLeft.days}</span>
              <span> : </span>
              <span>{timeLeft.hours}</span>
              <span> : </span>
              <span>{timeLeft.minutes}</span>
              <span> : </span>
              <span>{timeLeft.seconds}</span>
            </div>

            <p className="description">
              We don’t sell clothes. <br />
              We sell personality issues. <br />
              Limited drops. Unlimited opinions. <br />
              INSPIRED BY THE FEAR OF BEING AVERAGE. <br />
            </p>

            <div className="subscribe">
              <input type="email" placeholder="Your Email Address" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <img
          className="background-img"
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e"
          alt="fashion"
        />

        <img
          className="overlay-img"
          src={midImg}
          alt="model"
        />
      </div>
    </div>
  );
}

export default App;
