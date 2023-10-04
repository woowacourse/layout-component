export const leftText = `컴퓨터 프로그래밍(영어: computer programming) 또는 간단히 프로그래밍(programming, 문화어: 프로그램 작성) 혹은 코딩(coding)은 하나 이상의 관련된 추상 알고리즘을 특정한 프로그래밍 언어를 이용해 구체적인 컴퓨터 프로그램으로 구현하는 기술이다.[1] 프로그래밍은 기법, 과학, 수학, 공학, 심리학적 속성들을 가지고 있다.
한편 코딩은 '작업의 흐름에 따라 프로그램 언어의 명령문을 써서 프로그램을 작성하는 일' 또는 '프로그램의 코드를 작성하는 일'로 크게 나누어 언급되고 있는데 이는 알고리즘과의 상관관계를 잘 언급하고 있다.
프로그래밍 언어
<nowiki /> 이 부분의 본문은 프로그래밍 언어입니다.
에이다 러브레이스, 최초의 컴퓨터 프로그래머.
특정한 프로그래밍 언어로 쓰인 프로그램은 기계어로 번역되어 컴퓨터에 의해 실행되며, 어떤 프로그래밍 언어도 기계어로 번역이 가능하다. 어떤 언어에서는 기계어 대신 p-부호로 불리는 바리를 생성하기도 한다. 프로그래머가 기계 부호로 직접 작성하는 것도 가능하지만, 이는 굉장히 어려운 작업이다. 때문에 낮은 수준에서의 컴퓨터 제어가 필요한 경우 프로그래머들은 기계어 명령어에 대한 일대일 연상 기호 대응인 어셈블리어를 사용한다.
서로 다른 프로그래밍 언어는 다른 프로그래밍 유형을 지원하기 때문에, 분야에 따라 적합한 언어가 존재한다. 또한 언어마다 프로그래머가 알고리즘을 구현할 때 그 구체적인 방법과 수준의 차이가 있기 때문에, 사용의 편의성과 성능 사이에서 적절한 타협이 이루어진다. 또한 프로그래밍의 언어 중 하나이며 컴퓨터에게 명령을 전달할 수 있다.
`;

export const rightText = `메타에서 개발한 오픈 소스 자바스크립트 라이브러리.

프론트엔드 개발자 사이에서 AngularJS, Vue.js와 더불어 많은 인기를 얻고 있다. GitHub Star 수와 npm 패키지 다운로드 수는 React가 가장 많다.

SPA을 전제로 하고 있으며, Dirty checking과 Virtual DOM을 활용하여 업데이트 해야하는 DOM 요소를 찾아서 해당 부분만 업데이트하기 때문에, 리렌더링이 잦은 동적인 모던 웹에서 엄청나게 빠른 퍼포먼스를 내는게 가능하다. 기본적으로 모듈형 개발이기 때문에 생산성 또한 상당히 높은 라이브러리인지라 순식간에 대세로 떠올랐다. 거기에 기본적으로 프레임워크가 아니라 라이브러리인지라 다른 프레임워크에 간편하게 붙여서 사용하는 것도 가능하며, React Hooks라는 강력한 메소드들을 지원하면서 사실상 웹 프론트엔드 개발의 표준으로 자리잡았다. 이와 더불어 타입스크립트나 Sass 같은 언어도 지원한다. 또한 Next.js 등의 등장으로 인해 SSG, SSR등을 할 수 있게 되면서 사용 범위 또한 기하급수적으로 늘어났다.
2. 예시[편집]
함수 문법 (권장)
import ReactDOM from 'react-dom';

function App ({name}){
  return (
    <h1>Hello, {name}!</h1>
  )
}

ReactDOM.render(<App name="홍길동" />, document.getElementById('root'));

클래스 문법 (비권장)

해당 코드는 최신 브라우저에서 막 지원하기 시작한 import문과, JS 표준 문법이 아닌 JSX를 사용했기 때문에 이 코드가 그대로 브라우저상에 작동되는 것은 아니다. Babel을 통해 대부분의 브라우저가 사용할 수 있는 JS 코드로 변환한 후 사용할 수 있다.
2.1. 해설[편집]
function App ({ name }) {
  return (
    <h1>Hello, {name}!</h1>
  );
}
({ name }) 은, JavaScript 또는 TypeScript에서 사용할 수 있는 destructuring(구조 분해 할당)이라는 문법을 사용한 부분이다. 즉, App이라는 함수의 첫번째 인자의 name이라는 속성을 name이라는 변수에 할당한 것이다.

또한 Return 뒤에 HTML태그처럼 보이는것이 나오는데, 이는 JSX로 Virtual DOM(React Element)을 생성하는 부분이다. 풀어쓰면 다음과 같다. JSX 가 일반적인 함수 호출로 변경되었다.

import { jsx } from "react/jsx-runtime";

function App(props) {
  const name = props.name;
  return jsx("h1", {
    children: ["Hello, ", name, "!"]
  });
}

2.2. 리액트가 있고 없고의 차이 (컴포넌트)[편집]
리액트가 없을 때
<header>
  <h1>Logo</h1>
</header>
<nav>
 <ul>
  <li>
    <a href="#">메뉴1</a>
  </li>
  <li>
    <a href="#">메뉴2</a>
  </li>
 </ul>
</nav>
<section>
  <p>Hello World!</p>
</section>

리액트가 있을 때
const Hlogo = () => {
  return (
    <header>
      <h1>Logo</h1>
    </header>
  );
};

const Anav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">메뉴1</a>
        </li>
        <li>
          <a href="#">메뉴2</a>
        </li>
      </ul>
    </nav>
  );
};

const Bsection = ({ amumal }) => {
  return (
    <section>
      <p>{amumal}</p>
    </section>
  );
};

const App = () => {
  return (
    <div className="App">
      <Hlogo />
      <Anav />
      <Bsection amumal="Hello World!" />
    </div>
  );
};

export default App;


(위에서 보는 것처럼 컴포넌트 클래스 값은 대문자로 시작되어야 한다.)

위와 같이 컴포넌트(부품)로 나누어서 정리가 가능하다. 이렇게 코드가 짧을 때에는 별로 의미가 없지만 한 페이지의 코드가 길 때에는 코드를 나누어 담을 수 있어서 유용하다. 또한 각 컴포넌트들은 js 파일로 만들어서 공유가 가능하기 때문에 이미 만들어진 컴포넌트들을 조립하여 웹페이지를 만들 수 있어서 가능성이 무궁무진해진다.

참고로 메타에서는 크롬 개발자 도구를 이용해서 리액트로 만들고 있는 페이지의 리액트 컴포넌트들을 볼 수 있는 툴을 제공하고 있다.`;
