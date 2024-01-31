import {
  Box,
  Grid,
  Flex,
  Button,
  Spinner,
  Heading,
  Container,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Quiz = () => {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);
  const [wrongScore, setWrongScore] = useState(0);
  const [correctScore, setCorrectScore] = useState(0);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [showResultButton, setShowResultButton] = useState(false);
  const AllQuizes = useSelector((store) => store.quizes);
  const userData = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleNextClick = () => {
    setCurrentQuizIndex(currentQuizIndex + 1);
  };

  useEffect(() => {
    setData(AllQuizes);
  }, [AllQuizes]);

  useEffect(() => {
    if (currentQuizIndex < data.length) {
      const el = data[currentQuizIndex];
      let ansArray = [el.correct_answer, ...el.incorrect_answers];
      // make randomize the order of the options
      for (let i = ansArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [ansArray[i], ansArray[j]] = [ansArray[j], ansArray[i]];
      }

      const newQuizee = {
        question: el.question,
        options: ansArray,
        correctOption: el.correct_answer,
      };

      setOptions([newQuizee]);
      setShowResultButton(false);
    } else {
      setShowResultButton(true);
    }
  }, [data, currentQuizIndex]);

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
        <Container maxW={"100%"}>
          <Heading textAlign={"center"} as="h3" size="lg">
            Welcome, {userData.name}
          </Heading>
          <Flex
            flexDirection={{ base: "column", md: "row", lg: "row" }}
            justifyContent={"space-around"}
            fontWeight={"bold"}
          >
            <Heading as="h4" size="md">
              Difficulty: {userData.difficulty}
            </Heading>
            <Heading as="h4" size="md">
              Score: {correctScore}
            </Heading>
          </Flex>
          <Container maxW={"90%"}>
            {options.map((quiz, index) => (
              <Box
                key={index}
                padding={{ base: "7px", md: "15px" }}
                bg={"#f7eedd"}
                display={"flex"}
                flexDirection={"column"}
                margin={{ base: "10px", md: "20px" }}
              >
                <Heading as="h1" size={{ base: "sm", md: "md" }}>
                  {"Q" +
                    Number(currentQuizIndex + 1) +
                    "." +
                    " " +
                    quiz.question}
                </Heading>
                <Grid
                  templateColumns={{
                    base: "repeat(1,auto)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(2, 1fr)",
                  }}
                  gap={4}
                  mt="20px"
                >
                  {quiz.options.map((optionElement, optionIndex) => (
                    <Box
                      key={optionIndex}
                      p={3}
                      m={2}
                      bg={"#028f76"}
                      color="white"
                      borderRadius="md"
                      cursor="pointer"
                      fontWeight={"bold"}
                      textAlign={"center"}
                      _hover={{ bg: "#015647" }}
                      onClick={() => {
                        if (optionElement === quiz.correctOption) {
                          setCorrectScore(correctScore + 1);
                        } else {
                          setWrongScore(wrongScore + 1);
                        }
                      }}
                    >
                      {optionElement}
                    </Box>
                  ))}
                </Grid>

                <Flex justifyContent="space-around" mt={4}>
                  <Button onClick={() => navigate("/")} colorScheme="red">
                    Quit
                  </Button>
                  {showResultButton ? (
                    <Button
                      p={3}
                      m={2}
                      bg={"#23436a"}
                      color="white"
                      borderRadius="md"
                      cursor="pointer"
                      fontWeight={"bold"}
                      textAlign={"center"}
                      _hover={{ bg: "blue" }}
                      onClick={() => navigate("/")}
                    >
                      Go to homepage
                    </Button>
                  ) : (
                    <Button
                      p={3}
                      m={2}
                      bg={"#23436a"}
                      color="white"
                      borderRadius="md"
                      cursor="pointer"
                      fontWeight={"bold"}
                      textAlign={"center"}
                      _hover={{ bg: "blue" }}
                      onClick={handleNextClick}
                    >
                      Next
                    </Button>
                  )}
                </Flex>
              </Box>
            ))}
          </Container>
        </Container>
      )}
    </Box>
  );
};

export default Quiz;
