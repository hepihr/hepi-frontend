import React from "react";

interface IEmployeeListRenderer {
  data: any;
}

const EmployeeListRenderer: React.FC<IEmployeeListRenderer> = ({
  data,
}): JSX.Element => {
  console.log(data);
  return (
    <>
      <h1>Employee's List</h1>
    </>
  );
};

export default EmployeeListRenderer;
