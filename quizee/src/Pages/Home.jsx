import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getQuiz } from "../Redux/actions";
import { useDispatch } from "react-redux";
import { Box, Button, Image, Select, Stack } from "@chakra-ui/react";

const Home = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [category, setCategory] = useState(9);
  const [difficulty, setDifficulty] = useState("easy");

  const handleStart = () => {
    dispatch(getQuiz({ category, difficulty }));
    navigation("/quiz");
  };

  return (
    <Stack>
      <Box
        display={"flex"}
        padding={{ base: "5px", md: "15px" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Image src="https://i.ibb.co/rF5t4VK/quiz1.png" alt="banner" />

        <Box
          display={"flex"}
          margin={"auto"}
          padding={"10px"}
          flexDirection={"column"}
          width={{ base: "90%", md: "38%" }}
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        >
          {/* Difficulty Select tag */}
          <Select
            bg="#e7e4d5"
            color="black"
            borderColor="#e7e4d5"
            placeholder="Select Difficulty:"
            margin={{ base: "10px 0px 10px 0px", md: "12px 0px 12px 0px" }}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Select>

          {/* Category Select tag */}
          <Select
            bg="#e7e4d5"
            color="black"
            borderColor="#e7e4d5"
            placeholder="Select Category:"
            margin={{ base: "10px 0px 10px 0px", md: "12px 0px 12px 0px" }}
            onChange={(e) => setCategory(Number(e.target.value))}
          >
            <option value="9">General Knowledge</option>
            <option value="17">Science & Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="30">Science: Gudgets</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="27">Animals</option>
          </Select>

          {/* Start Button */}
          <Button
            size="lg"
            colorScheme="teal"
            onClick={handleStart}
            margin={{ base: "10px 0px 10px 0px", md: "12px 0px 12px 0px" }}
          >
            Start
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default Home;

// https://opentdb.com/
