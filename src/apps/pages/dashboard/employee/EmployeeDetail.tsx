import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import PageHelmet from "../../../layouts/PageHelmet";
import QueryWrapper from "../../../layouts/QueryWrapper";
import api from "../../../utils/api";
import { timeoffEmployeesAPI } from "../../../utils/api/endpoint";
import EmployeeDetailRenderer from "./components/EmployeeDetailRenderer";

const EmployeeDetail: React.FC = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();

  const { data, error, isError, isLoading } = useQuery(
    timeoffEmployeesAPI + id,
    async () => {
      const { data } = await api.get(timeoffEmployeesAPI + id);
      return data;
    }
  );

  return (
    <>
      <PageHelmet pageTitle="Employee's Detail" />
      <QueryWrapper error={error} isError={isError} isLoading={isLoading}>
        <EmployeeDetailRenderer data={data} />
      </QueryWrapper>
    </>
  );
};

export default EmployeeDetail;
