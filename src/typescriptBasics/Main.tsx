import React from "react";
import Employee from "./Employee";

const Main = () => {
  const handleGetEmployee = () => {
    let emp = new Employee();
    //this is how we get the value
    console.log(emp);
    console.log(emp.age);
    //this is how we set the value
    emp.age = 24;
    emp.firstName = "anil";
    emp.lastName = "singh";
    console.log(emp);
  };

  return (
    <div>
      <input type="button" value="getEmployee" onClick={handleGetEmployee} />
    </div>
  );
};

export default Main;
