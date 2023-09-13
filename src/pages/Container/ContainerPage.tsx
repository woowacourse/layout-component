import Container from '../../components/Container/Container';
import { sampleDivStyle } from './ContainerPage.style';

const ContainerPage = () => {
  return (
    <div>
      <h1>Container</h1>
      <section>
        <h2>아무런 설정도 하지 않은 컴포넌트는 아래처럼 랜더링 됩니다.</h2>
        <div>
          <Container>
            <div css={sampleDivStyle} />
          </Container>
        </div>
      </section>
    </div>
  );
};

export default ContainerPage;
