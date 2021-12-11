import { Button, Container } from "@mantine/core";
import React from "react";
import { FaCogs, FaDochub, FaHome } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const ApplicationsNavbar: React.FC = () => {
  return (
    <Container className="flex flex-col w-full ">
      <Button leftIcon={<FaHome />} className="btn btn-ghost" size="lg">
        Dashboard
      </Button>
      <Button leftIcon={<IoIosPeople />} className="btn btn-ghost">
        Employees
      </Button>
      <Button leftIcon={<FaDochub />} className="btn btn-ghost">
        Documents
      </Button>
      <Button leftIcon={<FaCogs />} className="btn btn-ghost">
        Settings
      </Button>
    </Container>
  );
};

export default ApplicationsNavbar;
