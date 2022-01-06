import React from "react";

interface IEmployeeDetailRenderer {
  data: any;
}

const EmployeeDetailRenderer: React.FC<IEmployeeDetailRenderer> = ({
  data,
}): JSX.Element => {
  console.log(data);

  return (
    <>
      <h1>Employee's Detail</h1>
    </>
  );
};

export default EmployeeDetailRenderer;
