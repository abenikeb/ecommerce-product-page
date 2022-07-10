import React from "react";
import Counter from "./counter";

const Counters = (props) => {
  return (
    <div className="mt-4 flex flex-col gap-3 px-8 py-4 bg-white w-80 rounded-2xl shadow-lg">
      {props.counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
          onDelete={props.onDelete}
        />
      ))}
    </div>
  );
};

export default Counters;
