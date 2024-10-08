import React, { useRef } from "react";

import { SC, createComponent } from "../../src/index";

const Box = createComponent("div");

const App = () => {
  const refBox = useRef(null);
  console.log("refBox: ", refBox);
  return (
    <div>
      Demo
      <Box></Box>
      <SC.div
        ref={refBox}
        data-prop="tes"
        data-new={null}
        data-up={1}
        data-down={undefined}
        data-left={""}
        data-right=""
        color="blue"
        backgroundColor="red"
        bgColor="red"
        _hover={{ bgColor: "beige" }}
        _custom={{ condition: "&:hover", style: { bgColor: "darkblue" } }}
      >
        another
      </SC.div>
      <SC.feMerge></SC.feMerge>
      <SC.tspan>g</SC.tspan>
    </div>
  );
};

export default App;
