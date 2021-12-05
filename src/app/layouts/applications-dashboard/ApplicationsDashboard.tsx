import {
  AppShell,
  Burger,
  Container,
  Header,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import ApplicationsNavbar from "./ApplicationsNavbar";

interface IApplicationsDashboard {
  applicationsHeader: string;
}

const ApplicationsDashboard: React.FC<IApplicationsDashboard> = ({
  applicationsHeader,
  children,
}) => {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  return (
    <AppShell
      fixed
      navbarOffsetBreakpoint="sm"
      navbar={
        opened ? (
          <Navbar padding="md" hidden={!opened} width={{ sm: 300 }}>
            <ApplicationsNavbar />
          </Navbar>
        ) : (
          <></>
        )
      }
      header={
        <Header height={70} padding="md">
          {/* You can handle other responsive styles with MediaQuery component or createStyles function */}
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery styles={{ display: "none" }}>
              <Burger
                className="btn btn-square btn-ghost"
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Text>{applicationsHeader}</Text>
          </div>
        </Header>
      }
    >
      <Container>
        <>{children}</>
      </Container>
    </AppShell>
  );
};

export default ApplicationsDashboard;
