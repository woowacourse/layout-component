import { Container, FlexBox } from '.';

const companyWishList = [
  '네이버',
  '카카오',
  '라인',
  '쿠팡',
  '배민',
  '당근',
  '토스',
  '직방',
  '야놀자',
  '몰로코',
  '두나무',
  '센드버드',
];

function App() {
  return (
    <>
      <Container maxWidth={1200} minWidth={600} css={{ backgroundColor: '#0064ff' }}>
        컨테이너 컴포넌트
        <FlexBox direction="column" align="center" gap={5}>
          {companyWishList.map((company, index) => (
            <div key={index}>{company}</div>
          ))}
        </FlexBox>
      </Container>
    </>
  );
}

export default App;
