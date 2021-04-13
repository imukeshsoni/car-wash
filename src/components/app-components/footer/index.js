import React from "react";
import "./styles.css";
import { Button } from "../../base-components/button/index.js";
import Input from "../../base-components/input";

function Footer() {
  const data = [
    {
      title: "Contact us",
      link: "/",
    },
    {
      title: "FAQs",
      link: "/",
    },
    {
      title: "Become a partner",
      link: "/",
    },
    {
      title: "About us",
      link: "/",
    },
  ];

  return (
    <div className="footer--conatiner">
      <h3 className="footer--heading">WASHIVO</h3>
      <div className="footer--items">
        {data.map((value, i) => {
          return (
            <li>
              <a key={i} className="href" href={value.link}>
                {value.title}
              </a>
            </li>
          );
        })}
      </div>
      <div className=" footer--heading">
        <h2>Subscribe to our newsletters and offers</h2>

        <Input type="email" minLength="6" maxLength="32" />
        <Button buttonStyle="btn--outline" buttonSize="btn--medium">
          Subscribe
        </Button>
      </div>
    </div>
  );
}
export default Footer;
