import React, { useState } from "react";
import "./styles.css";
import Input from "../../base-components/input";
import axios from "axios";

export function Footer() {
  const [email, setEmail] = useState("");

  const subscribeHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/subscribe", email)
      .then((res) => {
        if (res.status === 200) {
          alert(
            "You've successfully subscribed to our newsletters and offers!"
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="footer--conatiner">
      <h3 className="footer--heading">
        <i className="fas fa-wind" />
        WASHIVO
      </h3>

      <div className="footer--items">
        <div className="contact">
          <h3>Contact us - (Head Branch) </h3>
          <br />
          <p>
            (502) 241-9016 <br />
            1927 N Glassell St <br />
            Orange, California(CA), 92865
          </p>
        </div>
        <div className="contact">
          <h3>Contact us</h3>

          <br />
          <p>
            (503) 692-3834
            <br />
            2100 W Commonwealth Ave
            <br />
            Fullerton, California(CA), 92833
          </p>
        </div>

        <div className="contact">
          <h3>Become a partner</h3>
          <br />
          <p>
            (502) 241-9016 <br />
            (502) 241-9016 <br />
            (503) 229-7240
          </p>
        </div>
        <form onSubmit={subscribeHandler} className="">
          <h2>Subscribe to our newsletters and offers</h2>

          <Input
            Type="text"
            Name="email"
            MinLength="6"
            MaxLength="32"
            OnChange={(e) => setEmail(e.target.value)}
          />
          <Input Type="submit" Value="Subscribe" />
        </form>
      </div>
    </div>
  );
}
export default Footer;
