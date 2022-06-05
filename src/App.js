import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questions from "./Data/Questions";
import QuestionsView from "./Views/QuestionsView";
import Wrapper from "./Components/Wrapper";
import NavigationBar from "./Components/NavigationBar";
import TopicsView from "./Views/TopicsView";
import LandingView from "./Views/LandingView";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { create } from "@mui/material/styles/createTransitions";

function App() {
  const theme = createTheme({
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: "disableHoverEffect" },
            style: {
              "&:hover": {
                backgroundColor: "#464551",
              },
            },
          },
        ],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavigationBar />
                <Wrapper>
                  <LandingView />
                </Wrapper>
              </>
            }
          />
          {Questions.map((item) => {
            return (
              <Route
                path={`/questions/${item.topic}`}
                element={
                  <>
                    <NavigationBar />
                    <Wrapper>
                      <QuestionsView
                        questions={item.questions}
                        topic={item.topic}
                      />
                    </Wrapper>
                  </>
                }
              />
            );
          })}

          <Route
            path="/topics"
            element={
              <>
                <NavigationBar />
                <Wrapper>
                  <TopicsView topicsArr={Questions} />
                </Wrapper>
              </>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
