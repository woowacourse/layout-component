import Container from "./components/common/Container";
import FlexBox from "./components/common/FlexBox";

const favoriteFoods = [
  "삼겹살",
  "스시",
  "김치찌개",
  "돼지국밥",
  "치킨",
  "피자",
  "햄버거",
  "초코우유",
  "곱창",
  "마라샹궈",
  "훠궈",
];

function App() {
  return (
    <Container
      maxWidth={1250}
      minWidth={600}
      css={{ backgroundColor: "#FAF1E4" }}
    >
      Container Component
      <FlexBox direction="column" align="center" gap={5}>
        {favoriteFoods.map((food, index) => (
          <div key={index}>{food}</div>
        ))}
      </FlexBox>
    </Container>
  );
}

export default App;
