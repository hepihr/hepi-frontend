import { Button, Container } from "@mantine/core";
import React from "react";
import { FaCogs, FaDochub, FaHome } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { Link } from "react-router-dom";

const ApplicationsNavbar: React.FC = () => {
  return (
    <Container className="flex flex-col w-full ">
      <Button
        leftIcon={<FaHome />}
        className="btn btn-ghost"
        size="lg"
        component={Link}
        to={"/"}
      >
        Dashboard
      </Button>
      <Button
        leftIcon={<IoIosPeople />}
        className="btn btn-ghost"
        component={Link}
        to={"/dashboard/employees"}
      >
        Employees
      </Button>
      <Button
        leftIcon={<FaDochub />}
        className="btn btn-ghost"
        component={Link}
        to={"/dashboard/documents"}
      >
        Documents
      </Button>
      <Button
        leftIcon={<FaCogs />}
        className="btn btn-ghost"
        component={Link}
        to={"/settings"}
      >
        Settings
      </Button>
    </Container>
  );
};

export default ApplicationsNavbar;
