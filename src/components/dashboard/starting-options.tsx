import React from "react";
import { startingOptions } from "./options";

const StartingOptions = () => {
  return (
    <div className="grid grid-cols-3 gap-3 max-w-[650px]">
      {startingOptions.map((item) => (
        <div key={item.text} className="flex flex-col aspect-[4/3] bg-red-400 w-full rounded items-center justify-center text-center gap-3">
          {item.children}
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default StartingOptions;
