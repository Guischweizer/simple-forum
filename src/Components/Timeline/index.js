import React from "react";

import "./timeline.scss";
import Header from "../Header";

const foo = [
  { id: 0, author: "Joao", content: "Que dia" },
  { id: 1, author: "Kadu", content: "To louco" },
  { id: 2, author: "Arnaldo", content: "Maconha" },
  { id: 3, author: "Robson", content: "Pq q eu to fazendo isso mesmo?" }
];

const Timeline = ({ allContent = foo }) => (
  <div className="timeline">
    <Header title="Timeline" />
    {allContent.map(content => (
      <div key={content.id}>
        {`@${content.author} say:`}
        <div className="timeline__box">{content.content}</div>
      </div>
    ))}
  </div>
);

export default Timeline;
