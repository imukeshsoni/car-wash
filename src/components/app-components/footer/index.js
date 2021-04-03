import React from "react";

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
      <h3 className="footer-heading">WASHIVO</h3>
      <div className="contact-us">
        {data.map((value, i) => {
          return (
            <li>
              <a href={value.link}>{value.title}</a>
            </li>
          );
        })}
      </div>
    </div>
  );
}
export default Footer;
