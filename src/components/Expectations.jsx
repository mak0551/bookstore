import React from "react";
import Whypl from "./Whypl";
import Expectbtn from "./Expectbtn";
import Button from "./Button";
function Expectations() {
  const h1 = "We Always Try To Understand Users Expectation";
  const p ="MONOSAGE is an industry-leading web, software, and mobile app development company completed projects and counting...";
  var data = [
    {
      h1: "1000+",
      p: "Downloaded",
    },
    {
      h1: "20+",
      p: "Feedback",
    },
    {
      h1: "20+",
      p: "Workers",
    },
    {
      h1: "70+",
      p: "Contributors",
    },
  ];
  return (
    <div className="expectations h-[70vh] bg-zinc-50">
      <Whypl h1={h1} p={p} />
      <div className="expectationsbtn flex justify-center items-center gap-36 w-full p-12">
        {data.map((elem, index) => (
          <Expectbtn h1={elem.h1} p={elem.p} />
        ))}
      </div>
      <div className="expectationlow flex justify-between items-center w-[70vh] m-auto p-12">
        <div>
          <h1 className="expec text-sky-900 text-xl">Having a question about us?</h1>
          <h6 className="expect text-sky-600 mt-1">Don't hesitate to call us</h6>
        </div>
        <div>
            <Button login ="CONTACT US"/>
        </div>
      </div>
    </div>
  );
}

export default Expectations;
