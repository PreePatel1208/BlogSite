
import React, { useState } from "react";

interface Props{
    children:string
}

  
const ReadMore = ({ children }:Props) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      {/* {isReadMore ?  : text} */}
      <div className="product-des" dangerouslySetInnerHTML={{ __html: isReadMore? text.slice(0, 100): text}} />

      <span onClick={toggleReadMore} className="read-or-hide" >
        {isReadMore ? "...read more" : " show less"}
      </span>
</>
  );
};
export default ReadMore