import React from "react";
import { useQuery } from "react-query";
import PageHelmet from "../../../layouts/PageHelmet";
import QueryWrapper from "../../../layouts/QueryWrapper";
import api from "../../../utils/api";
import { employeesAPI } from "../../../utils/api/endpoint";
import EmployeeListRenderer from "./components/EmployeeListRenderer";

const EmployeeList: React.FC = (): JSX.Element => {
  const { data, error, isError, isLoading } = useQuery(
    employeesAPI,
    async () => {
      const { data } = await api.get(employeesAPI);
      return data;
    }
  );

  return (
    <>
      <PageHelmet pageTitle="Employee's List" />
      <QueryWrapper error={error} isError={isError} isLoading={isLoading}>
        <EmployeeListRenderer data={data} />
      </QueryWrapper>
    </>
  );
};

export default EmployeeList;
