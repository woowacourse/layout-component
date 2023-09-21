---
sidebar_position: 1
slug: /
---

# 소개

안녕하세요! layout-compnent의 문서입니다. 이 문서에서는 본 라이브러리에서 제공하는 컴포넌트에 대한 사용법과 정보를 제공해드립니다.

## Getting Started

라이브러리를 설치하는 방법은 매우 간단합니다.

```bash
npm install @solo5star/layout-component
```

css 코드는 `style.css` 로 별도로 제공됩니다. 번들러 설정에 따라 해당 파일을 import해주세요.

create-react-app 혹은 vite를 사용한다면 아래와 같이 CSS를 적용할 수 있습니다.

```tsx
import React from 'react';
import '@solo5star/layout-component/dist/style.css';

const App = () => {
  // your code here
};

export default App;
```
