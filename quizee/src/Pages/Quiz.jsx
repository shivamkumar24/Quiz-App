import React, { useEffect, useState } from "react";
import { Box, Container, Heading, Spinner, Text } from "@chakra-ui/react";

import { useSelector } from "react-redux";

const Quiz = () => {
  const [data, setData] = useState([]);
  const [option, setOptions] = useState([]);
  const AllQuizes = useSelector((store) => store.quizes);
  console.log(AllQuizes);

  useEffect(() => {
    setData(AllQuizes);
  }, [data]);

  console.log(data);

  return (
    <Box>
      {data === null ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          margin={"auto"}
        />
      ) : (
        <Container maxW={"90%"}>
          {data.map((el, index) => (
            <Box
              padding={{ base: "7px", md: "15px" }}
              bg={"#e2ddd9"}
              display={"flex"}
              flexDirection={"column"}
              margin={{ base: "10px", md: "20px" }}
            >
              <Heading as="h1" size={{ base: "sm", md: "md" }}>
                {"Q" + Number(index + 1) + "." + " " + el.question}
              </Heading>
              {el.incorrect_answers.map((elem) => {
                setOptions([...option, elem]);
              })}
              {setOptions([...option, el.correct_answer])}

              {option &&
                option.map((element) => {
                  <Text>{element}</Text>;
                })}
            </Box>
          ))}
        </Container>
      )}
    </Box>
  );
};

export default Quiz;
