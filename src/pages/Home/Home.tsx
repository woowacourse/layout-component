import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>레이아웃 컴포넌트 예시보러 가기</h1>
      <ul>
        <li>
          <h2>
            <Link to="/container">Container</Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link to="/grid">Grid</Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link to="/flex">Flex</Link>
          </h2>
        </li>
      </ul>
    </div>
  );
};

export default Home;
