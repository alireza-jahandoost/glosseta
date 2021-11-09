import React from "react";
import { Stack } from "@chakra-ui/react";
import Footer from "../../footer/footer";

const PageLayout = ({ children }: { children?: object }): JSX.Element => {
  return (
    <Stack
      spacing={10}
      background="#7a08fc"
      padding={1}
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      {children}
      <Footer />
    </Stack>
  );
};

export default PageLayout;
