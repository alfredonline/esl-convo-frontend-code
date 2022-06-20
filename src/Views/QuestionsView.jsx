import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import QuestionHolder from "../Components/QuestionHolder";
import Header from "../Components/Header";
import VocabularyHolder from "../Components/VocabularyHolder";
import axios from "axios";
import DefinitionHolder from "../Components/DefinitionHolder";
import InfoBox from "../Components/InfoBox";

function QuestionsView({ questions, topic }) {
  const [vocabulary, setVocabulary] = useState(null);
  const [definitions, setDefinitions] = useState(null);

  useEffect(() => {
    async function CollectDefinitions() {
      const fetchDefinitions = await axios.get(
        `https://esl-convo-backend-code.herokuapp.com/definitions/${topic}`
      );
      setDefinitions(fetchDefinitions.data.definitions);
    }

    async function CollectSynonyms() {
      const fetchSynonyms = await axios.get(
        `https://esl-convo-backend-code.herokuapp.com/synonyms/${topic}`
      );
      setVocabulary(fetchSynonyms.data);
    }

    CollectDefinitions();
    CollectSynonyms();
  }, []);

  return (
    <>
      <Grid
        container
        sx={{ padding: "12px", marginTop: "20px" }}
        spacing="20px"
      >
        <Grid item lg="4">
          <InfoBox
            columnName={"Questions"}
            number={questions && questions.length}
            bgColor={"#ffede3"}
            colorPassedDown="#fb904f"
            numColor={"#fb863c"}
          />
        </Grid>
        <Grid item lg="4">
          <InfoBox
            columnName={"Synonyms"}
            bgColor="#eee4ff"
            numColor="#8b4bf8"
            number={vocabulary && vocabulary.length}
            colorPassedDown="#9057fb"
          />
        </Grid>
        <Grid item lg="4">
          <InfoBox
            columnName={"Definitions"}
            bgColor="#fff8e3"
            numColor={"#fca401"}
            colorPassedDown="#fac352"
            number={definitions && definitions.length}
          />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ padding: "12px", marginTop: "20px" }}
        spacing="20px"
      >
        <Grid
          item
          lg="4"
          xs="12"
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <Header>
            <span style={{ fontSize: "22px" }}>🙋</span>{" "}
            <span style={{ marginLeft: "10px", fontSize: "22px" }}>
              Questions
            </span>
          </Header>
          {questions &&
            questions.map((item) => {
              return <QuestionHolder>{item}</QuestionHolder>;
            })}
        </Grid>
        <Grid
          item
          lg="4"
          xs="12"
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <Header sx={{ fontSize: "22px" }}>
            <span style={{ fontSize: "22px" }}>✍️</span>{" "}
            <span style={{ marginLeft: "10px", fontSize: "22px" }}>
              Vocabulary
            </span>
          </Header>
          {vocabulary &&
            vocabulary.map((item) => {
              return <VocabularyHolder>{item}</VocabularyHolder>;
            })}
        </Grid>
        <Grid
          item
          lg="4"
          xs="12"
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <Header sx={{ fontSize: "22px" }}>
            <span style={{ fontSize: "22px" }}>📚</span>
            <span style={{ marginLeft: "10px", fontSize: "22px" }}>
              Definitions
            </span>
          </Header>
          {definitions &&
            definitions.map((item) => {
              return <DefinitionHolder>{item.definition}</DefinitionHolder>;
            })}
        </Grid>
      </Grid>
    </>
  );
}

export default QuestionsView;
