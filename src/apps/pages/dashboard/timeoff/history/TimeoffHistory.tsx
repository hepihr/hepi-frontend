import React from "react";
import PageHelmet from "../../../../layouts/PageHelmet";
import TimeoffHistoryRenderer from "./components/TimeoffHistoryRenderer";
const TimeoffHistory: React.FC = (): JSX.Element => {
  return (
    <>
      <PageHelmet pageTitle="Timeoff History" />
      <TimeoffHistoryRenderer />
    </>
  );
};

export default TimeoffHistory;
