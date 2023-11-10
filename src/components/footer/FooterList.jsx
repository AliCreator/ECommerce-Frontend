import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const FooterList = ({ title, list }) => {
  const [showList, setShowList] = useState(false);
  return (
    <section className="md:hidden">
      <div className="flex items-center justify-between text-xl font-bold w-full">
        <h2 className="md:text-2xl">{title}</h2>
        <span className="md:hidden" onClick={() => setShowList(!showList)}>
          {showList ? <AiOutlineUp /> : <AiOutlineDown />}
        </span>
      </div>
      {showList && (
        <ul className="flex flex-col gap-4 md:text-sm md:text-gray-600 mt-4">
          {list.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default FooterList;
