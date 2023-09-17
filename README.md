<p align="middle" >
  <img width="100px;" src="https://em-content.zobj.net/source/skype/289/straight-ruler_1f4cf.png"/>
</p>

  <h2 align="middle">누구나 사용할 수 있는 레이아웃 컴포넌트</h2>
  <p align="middle">재사용 가능한 레이아웃 컴포넌트 제작과 배포</p>

<br/>

 <h2 align="middle"> 컴포넌트 props 소개 및 예시 </h2>

### Container 컴포넌트

- minWidth: string
  - 최소 유지되어야 하는 가로길이
  - px, % 등 다양한 단위로 설정할 수 있도록 string type으로 작성
- maxWidth: string
  - 최대 유지되어야 하는 가로길이
  - px, % 등 다양한 단위로 설정할 수 있도록 string type으로 작성
- padding: number
  - 내부 컨텐츠 상하좌우 여백길이
  - px로 단위 고정

### Grid 컴포넌트

- rows: number
  - 가로행 갯수
- columns: number
  - 세로열 갯수
- gap: number
  - content 사이 간격
  - px로 단위 고정

### Flex 컴포넌트

- direction: "row" | "column";
  - 필수항목
  - 가로/세로방향 주축 설정
- gap: number;
  - 필수항목
  - content 사이 간격
  - px로 단위 고정
- justify?: | "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly";
  - 선택항목
  - 주축 방향에 따라 아이템 정렬
- align?: "center" | "flex-start" | "flex-end" | "stretch";
  - 선택항목
  - justify와 수직방향에 따라 아이템 정렬
- flexWrap?: "nowrap" | "wrap";
  - 선택항목
  - 공간에 여유가 없는 경우 줄바꿈처리 여부
  - nowrap = 줄바꿈하지 않음
  - wrap = 줄바꿈
