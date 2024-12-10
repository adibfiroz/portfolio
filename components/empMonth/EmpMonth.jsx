import React from "react";
import Card from "../card";

const EmpMonth = () => {
  return (
    <div className="my-20">
      <div className="container mx-auto max-w-4xl p-5">
        <div className="">
          <h2 className="text-white font-bold text-3xl md:text-5xl text-center">
            Employee of the Month
          </h2>
          <Card className="mt-16">
            <div className="grid gap-10 sm:grid-cols-2">
              <div className=" h-72 sm:h-96 mx-auto ">
                <img className="h-full" src="/img/trophy.png" alt="" />
              </div>
              <div className="inline-flex items-center">
                <img className="emp" src="/img/emp.jpg" alt="" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmpMonth;
