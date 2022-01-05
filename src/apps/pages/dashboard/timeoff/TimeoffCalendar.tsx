import React from "react";
import PageHelmet from "../../../layouts/PageHelmet";
import TimeoffCalendarRenderer from "./components/TimeoffCalendarRenderer";

const TimeoffCalendar: React.FC = (): JSX.Element => {
  return (
    <>
      <PageHelmet pageTitle="Timeoff Calendar" />
      <TimeoffCalendarRenderer />
    </>
  );
};

export default TimeoffCalendar;
