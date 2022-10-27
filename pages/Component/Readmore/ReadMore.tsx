
import { log } from "console";
import React, { useState } from "react";

interface Props{
    children:string
}

const ReadMore = ({ children }:Props) => {
  const text = children?children:"<h1>Hello kanha</h1>";
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
          <div className="product-des" dangerouslySetInnerHTML={{ __html: isReadMore? text.slice(0, 100): text}} />

      <span onClick={toggleReadMore} className="read-or-hide" >
        {isReadMore ? "...read more" : " show less"}
      </span>
</>
  );
};
export default ReadMore