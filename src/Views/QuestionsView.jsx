import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import QuestionHolder from "../Components/QuestionHolder";
import Header from "../Components/Header";
import VocabularyHolder from "../Components/VocabularyHolder";
import axios from "axios";
import DefinitionHolder from "../Components/DefinitionHolder";

function QuestionsView({ questions, topic }) {
  const [vocabulary, setVocabulary] = useState(null);
  const [definitions, setDefinitions] = useState(null);
  const [viewQuestions, setViewQuestions] = useState(true);
  const [discussionImages, setDiscussionImages] = useState(Array);
  const [showLargerImage, setShowLargerImage] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  useEffect(() => {
    function CollectDiscussionImages(vocabularyArr) {
      vocabularyArr.forEach((word) => {
        setDiscussionImages((discussionImages) => [
          ...discussionImages,
          `https://source.unsplash.com/random/?${word}`,
        ]);
      });
    }

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
      CollectDiscussionImages(fetchSynonyms.data);
    }

    CollectDefinitions();
    CollectSynonyms();
  }, []);

  const ReturnGridOfQuestions = () => {
    return (
      <>
        <Grid container sx={{ padding: "12px" }} spacing="20px"></Grid>
        <Grid container sx={{ padding: "12px" }} spacing="20px">
          <Grid
            item
            lg="4"
            xs="12"
            sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <Header>
              <span style={{ fontSize: "22px" }}>
                Questions{" "}
                <span className="lengthHolder">{questions.length}</span>
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
              <span style={{ fontSize: "22px" }}>
                Vocabulary{" "}
                <span className="lengthHolder">
                  {vocabulary && vocabulary.length}
                </span>
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
              <span style={{ fontSize: "22px" }}>
                Definitions{" "}
                <span className="lengthHolder">
                  {definitions && definitions.length}
                </span>
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
  };

  const AllocateAndRenderLargerImage = (imgLink) => {
    setShowLargerImage(true);
    setCurrentImg(imgLink);
  };

  const ReturnDiscussionImages = () => {
    return (
      <div style={{ position: "relative" }}>
        {showLargerImage && (
          <div
            className="filter"
            onClick={() => setShowLargerImage(false)}
          ></div>
        )}
        {showLargerImage && <img src={currentImg} className="centerImg" />}
        <div className="discussionImageWrapper">
          {discussionImages &&
            discussionImages.map((image) => {
              return (
                <div
                  onClick={() => AllocateAndRenderLargerImage(image)}
                  className={"discussionImageHolder"}
                  style={{ backgroundImage: "url(" + image + ")" }}
                ></div>
              );
            })}
        </div>
      </div>
    );
  };

  const UpdateScreen = () => {
    if (viewQuestions) {
      setViewQuestions(false);
    } else {
      setViewQuestions(true);
    }
  };

  return (
    <>
      <div className="selectionHolder">
        <div
          className={viewQuestions ? "selectionBtnActive" : "selectionBtn"}
          onClick={() => UpdateScreen()}
        >
          View Questions, etc.
        </div>
        <div
          className={viewQuestions ? "selectionBtn" : "selectionBtnActive"}
          onClick={() => setViewQuestions(false)}
        >
          View Discussion Images
        </div>
      </div>
      {viewQuestions ? ReturnGridOfQuestions() : ReturnDiscussionImages()}
    </>
  );
}

export default QuestionsView;
