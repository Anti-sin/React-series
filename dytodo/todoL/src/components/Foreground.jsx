import React, { useRef, useState } from "react";
import Card from "./card";
import { motion } from "motion/react";
function Foreground() {

    const ref=useRef(null);

  const data = [
    {
      desc: "This is the background color of the card.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      desc: "This is the background color of the card.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "This is the background color of the card.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "green",
      },
    },
  ];
  return (
    <div ref={ref}
      className={`p-5 fixed flex gap-10 flex-wrap z-[3] top-0 left-0 w-full h-full`}
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
