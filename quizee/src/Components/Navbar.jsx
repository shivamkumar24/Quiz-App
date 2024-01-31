import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";

const Navbar = () => {
  const navigation = useNavigate();

  return (
    <Box bgColor={"#fbffe3"} padding={"10px"}>
      <Heading
        as="h1"
        cursor={"pointer"}
        textAlign={"center"}
        onClick={() => navigation("/")}
        size={{ base: "1xl", md: "2xl" }}
      >
        QuizPanther
      </Heading>
    </Box>
  );
};

export default Navbar;
