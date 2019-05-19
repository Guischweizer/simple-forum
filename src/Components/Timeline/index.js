import React from "react";

import "./timeline.scss";
import Header from "../Header";

const foo = [
  { author: "Joao", content: "Que dia" },
  { author: "Kadu", content: "To louco" },
  { author: "Arnaldo", content: "Maconha" },
  { author: "Robson", content: "Pq q eu to fazendo isso mesmo?" }
];

const Timeline = ({ allContent = foo }) => (
  <div className="timeline">
    <Header title="Timeline" />
    {allContent.map(content => (
      <div>
        {`${content.author} say:`}
        <div className="timeline__box">{content.content}</div>
      </div>
    ))}
  </div>
);

export default Timeline;
