import React from "react";
import { useQuery } from "react-query";
import PageHelmet from "../../../layouts/PageHelmet";
import QueryWrapper from "../../../layouts/QueryWrapper";
import api from "../../../utils/api";
import { timeoffEmployeesAPI } from "../../../utils/api/endpoint";
import EmployeeListRenderer from "./components/EmployeeListRenderer";

const EmployeeList: React.FC = (): JSX.Element => {
  const { data, error, isError, isLoading } = useQuery(
    timeoffEmployeesAPI,
    async () => {
      const { data } = await api.get(timeoffEmployeesAPI);
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
