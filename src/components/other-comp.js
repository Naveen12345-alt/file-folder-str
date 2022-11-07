import React, { useEffect } from "react";

const OtherComp = ({ state, func }) => {
  useEffect(() => {
    console.log(state, func);
    func();
  });

  return <div>OtherComp</div>;
};

function areEqual(prevProps, nextProps) {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */

  if (prevProps.state.a === nextProps.state.a) {
    return true;
  }
  return false;
}

export default React.memo(OtherComp, areEqual);
