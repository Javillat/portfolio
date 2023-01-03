import React from "react";
import "./whoami.css";

export default function Whoami() {
  return (
    <div className="whoami_container">
      <header className="header_whoami">
        <p>Who Am I:</p>
      </header>
      <div className="typewriter">
        <h1>Francisco Javier Villatoro</h1>
      </div>
      <div className="fullstack">
        <h2>-[ Full Stack Developer ]-</h2>
      </div>
      <section className="whoami_icons"></section>
    </div>
  );
}
