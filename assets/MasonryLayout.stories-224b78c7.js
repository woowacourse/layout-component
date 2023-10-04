import{j as a}from"./jsx-runtime-bc5d6cf6.js";import{r as m}from"./index-c013ead5.js";import{s as h,C as j}from"./common-ebccdf28.js";import"./_commonjsHelpers-725317a4.js";const n=t=>{if(t)return`repeat(auto-fill, minmax(${t}px, 1fr))`},s=({responsiveGap:t,responsiveColumnGap:o})=>{const i=t||o;if(i)return i},D=h(j)`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: ${({itemSize:t})=>`repeat(auto-fill, minmax(${t}px, 1fr))`};

  grid-auto-rows: 1px;
  grid-column-gap: ${({gap:t,columnGap:o="0"})=>t||o};

  @media (min-width: 640px) {
    grid-template-columns: ${({smallItemSize:t})=>n(t)};
    grid-column-gap: ${({smallGap:t,smallColumnGap:o})=>s({responsiveGap:t,responsiveColumnGap:o})};
  }

  @media (min-width: 768px) {
    grid-template-columns: ${({mediumItemSize:t})=>n(t)};
    grid-column-gap: ${({mediumGap:t,mediumColumnGap:o})=>s({responsiveGap:t,responsiveColumnGap:o})};
  }

  @media (min-width: 1024px) {
    grid-template-columns: ${({largeItemSize:t})=>n(t)};
    grid-column-gap: ${({largeGap:t,largeColumnGap:o})=>s({responsiveGap:t,responsiveColumnGap:o})};
  }

  @media (min-width: 1280px) {
    grid-template-columns: ${({xLargeItemSize:t})=>n(t)};
    grid-column-gap: ${({xLargeGap:t,xLargeColumnGap:o})=>s({responsiveGap:t,responsiveColumnGap:o})};
  }

  @media (min-width: 1536px) {
    grid-template-columns: ${({doubleXLargeItemSize:t})=>n(t)};
    grid-column-gap: ${({doubleXLargeGap:t,doubleXLargeColumnGap:o})=>s({responsiveGap:t,responsiveColumnGap:o})};
  }
`,f=({responsiveGap:t,responsiveRowGap:o})=>{const i=t||o;if(i)return i},X=h.div`
  width: 100%;
  height: max-content;
  padding-bottom: ${({gap:t,rowGap:o="0"})=>t||o};
  grid-row-end: ${({height:t})=>`span ${t}`};

  @media (min-width: 640px) {
    padding-bottom: ${({smallGap:t,smallRowGap:o})=>f({responsiveGap:t,responsiveRowGap:o})};
  }

  @media (min-width: 768px) {
    padding-bottom: ${({mediumGap:t,mediumRowGap:o})=>f({responsiveGap:t,responsiveRowGap:o})};
  }

  @media (min-width: 1024px) {
    padding-bottom: ${({largeGap:t,largeRowGap:o})=>f({responsiveGap:t,responsiveRowGap:o})};
  }

  @media (min-width: 1280px) {
    padding-bottom: ${({xLargeGap:t,xLargeRowGap:o})=>f({responsiveGap:t,responsiveRowGap:o})};
  }

  @media (min-width: 1536px) {
    padding-bottom: ${({doubleXLargeGap:t,doubleXLargeRowGap:o})=>f({responsiveGap:t,responsiveRowGap:o})};
  }
`,E=(t,o=300)=>{let i;return(...e)=>{clearTimeout(i),i=setTimeout(()=>{t.apply(void 0,e)},o)}};function w({children:t,...o}){const i=m.useRef(null),[e,r]=m.useState(1);return m.useEffect(()=>{if(!i.current)return;const l=E(c=>{const[x]=c,{height:q}=x.target.getBoundingClientRect();r(Math.round(q))},100),p=new ResizeObserver(l);return p.observe(i.current),()=>p.disconnect()},[]),a(X,{height:e,...o,ref:i,children:t})}try{w.displayName="MasonryLayoutItem",w.__docgenInfo={description:"",displayName:"MasonryLayoutItem",props:{rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"string"}},smallRowGap:{defaultValue:null,description:"",name:"smallRowGap",required:!1,type:{name:"string"}},mediumRowGap:{defaultValue:null,description:"",name:"mediumRowGap",required:!1,type:{name:"string"}},largeRowGap:{defaultValue:null,description:"",name:"largeRowGap",required:!1,type:{name:"string"}},xLargeRowGap:{defaultValue:null,description:"",name:"xLargeRowGap",required:!1,type:{name:"string"}},doubleXLargeRowGap:{defaultValue:null,description:"",name:"doubleXLargeRowGap",required:!1,type:{name:"string"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string"}},smallGap:{defaultValue:null,description:"",name:"smallGap",required:!1,type:{name:"string"}},mediumGap:{defaultValue:null,description:"",name:"mediumGap",required:!1,type:{name:"string"}},largeGap:{defaultValue:null,description:"",name:"largeGap",required:!1,type:{name:"string"}},xLargeGap:{defaultValue:null,description:"",name:"xLargeGap",required:!1,type:{name:"string"}},doubleXLargeGap:{defaultValue:null,description:"",name:"doubleXLargeGap",required:!1,type:{name:"string"}}}}}catch{}const B=m.forwardRef(function({css:o,as:i,children:e,...r},l){const p=Array.isArray(e),c=p?e:[e];return p?a(D,{as:i,ref:l,style:o,...r,children:c.map(x=>a(w,{...r,children:m.createElement(x.type,x.props)}))}):a(D,{as:i,ref:l,style:o,...r,children:e})}),C={title:"MasonryLayout",component:B,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"text",defaultValue:"100%",description:"컴포넌트의 너비를 조정할 수 있습니다."},as:{control:"text",defaultValue:"div",description:"HTML 태그를 문자열로 입력해 원하는 HTML 태그로 사용할 수 있습니다."},fullScreen:{control:"boolean",description:"true로 지정하면 화면의 전체의 너비를 차지합니다. (100vw)"},css:{control:"object",description:"디테일 한 CSS 속성을 지정해야 할 경우 직접 CSS를 입력할 수 있습니다."},itemSize:{control:"number",description:"아이템의 최소 너비를 숫자로 입력할 수 있습니다. 단위는 px입니다."},gap:{control:"text",description:"아이템들의 row, column의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%"},rowGap:{control:"text",description:"row 방향의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%"},columnGap:{control:"text",description:"column 방향의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%"},smallItemSize:{control:"number",description:"@media (min-width: 640px) 아이템의 최소 너비를 숫자로 입력할 수 있습니다. 단위는 px입니다."},smallGap:{control:"text",description:"@media (min-width: 640px) 아이템들의 row, column의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%"},smallRowGap:{control:"text",description:"@media (min-width: 640px) row 방향의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%"},smallColumnGap:{control:"text",description:"@media (min-width: 640px) column 방향의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%"},mediumItemSize:{control:"number",description:"@media (min-width: 768px) 아이템의 최소 너비를 숫자로 입력할 수 있습니다. 단위는 px입니다."},mediumGap:{control:"text",description:"@media (min-width: 768px) 아이템들의 row, column의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%"},mediumRowGap:{control:"text",description:"@media (min-width: 768px) row 방향의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%"},mediumColumnGap:{control:"text",description:"@media (min-width: 768px) column 방향의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%"},largeItemSize:{control:"number",description:"@media (min-width: 1024px) 아이템의 최소 너비를 숫자로 입력할 수 있습니다. 단위는 px입니다."},largeGap:{control:"text",description:"@media (min-width: 1024px) 아이템들의 row, column의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%"},largeRowGap:{control:"text",description:"@media (min-width: 1024px) row 방향의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%"},largeColumnGap:{control:"text",description:"@media (min-width: 1024px) column 방향의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%"},xLargeItemSize:{control:"number",description:"@media (min-width: 1280px) 아이템의 최소 너비를 숫자로 입력할 수 있습니다. 단위는 px입니다."},xLargeGap:{control:"text",description:"@media (min-width: 1280px) 아이템들의 row, column의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%"},xLargeRowGap:{control:"text",description:"@media (min-width: 1280px) row 방향의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%"},xLargeColumnGap:{control:"text",description:"@media (min-width: 1280px) column 방향의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%"},doubleXItemSize:{control:"number",description:"@media (min-width: 1536px) 아이템의 최소 너비를 숫자로 입력할 수 있습니다. 단위는 px입니다."},doubleXGap:{control:"text",description:"@media (min-width: 1536px) 아이템들의 row, column의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%"},doubleXRowGap:{control:"text",description:"@media (min-width: 1536px) row 방향의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%"},doubleXColumnGap:{control:"text",description:"@media (min-width: 1536px) column 방향의 간격을 문자열로 조정할 수 있습니다. EX) 10px, 10%"},m:{control:"text",description:"margin 옵션을 조정할 수 있습니다. EX) 10px, 10%"},ml:{control:"text",description:"margin-left 옵션을 조정할 수 있습니다. EX) 10px, 10%"},mr:{control:"text",description:"margin-right 옵션을 조정할 수 있습니다. EX) 10px, 10%"},mb:{control:"text",description:"margin-bottom 옵션을 조정할 수 있습니다. EX) 10px, 10%"},mt:{control:"text",description:"margin-top 옵션을 조정할 수 있습니다. EX) 10px, 10%"},mx:{control:"text",description:"margin에서 가로 옵션을 조정할 수 있습니다. EX) 10px, 10%"},my:{control:"text",description:"margin에서 세로 옵션을 조정할 수 있습니다. EX) 10px, 10%"},mxAuto:{control:"boolean",description:"margin에서 가로 옵션을 auto로 조정할 수 있습니다."},myAuto:{control:"boolean",description:"margin에서 세로 옵션을 auto로 조정할 수 있습니다."},p:{control:"text",description:"padding 옵션을 조정할 수 있습니다. EX) 10px, 10%"},pl:{control:"text",description:"padding-left 옵션을 조정할 수 있습니다. EX) 10px, 10%"},pr:{control:"text",description:"padding-right 옵션을 조정할 수 있습니다. EX) 10px, 10%"},pt:{control:"text",description:"padding-top 옵션을 조정할 수 있습니다. EX) 10px, 10%"},pb:{control:"text",description:"padding-bottom 옵션을 조정할 수 있습니다. EX) 10px, 10%"},px:{control:"text",description:"padding에서 가로 옵션을 조정할 수 있습니다. EX) 10px, 10%"},py:{control:"text",description:"padding에서 세로 옵션을 조정할 수 있습니다. EX) 10px, 10%"}}},b=["https://plus.unsplash.com/premium_photo-1668883188879-3a7acd2bec58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80","https://images.unsplash.com/photo-1695642579325-5d2d11fd9e36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80","https://images.unsplash.com/photo-1695597778289-fc1f5c715958?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80","https://plus.unsplash.com/premium_photo-1695517711308-f71ece6ded77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80","https://plus.unsplash.com/premium_photo-1673435845957-17f7b38f5dcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80","https://images.unsplash.com/photo-1682687980115-a37b56ea7271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80","https://plus.unsplash.com/premium_photo-1695517699512-a8abe3cc07b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80","https://images.unsplash.com/photo-1695378201929-c7e68a8102bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1924&q=80","https://images.unsplash.com/photo-1695235777899-2b422e2a94d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80","https://images.unsplash.com/photo-1693985319989-7952a07d0e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80","https://images.unsplash.com/photo-1682685797365-6f57bbebffed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80","https://images.unsplash.com/photo-1695378202330-4d0566dfec57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80","https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80","https://plus.unsplash.com/premium_photo-1668883188879-3a7acd2bec58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80","https://images.unsplash.com/photo-1695642579325-5d2d11fd9e36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80","https://images.unsplash.com/photo-1695597778289-fc1f5c715958?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80","https://plus.unsplash.com/premium_photo-1695517711308-f71ece6ded77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80","https://plus.unsplash.com/premium_photo-1673435845957-17f7b38f5dcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80","https://images.unsplash.com/photo-1682687980115-a37b56ea7271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80","https://plus.unsplash.com/premium_photo-1695517699512-a8abe3cc07b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80","https://images.unsplash.com/photo-1682685797365-6f57bbebffed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80","https://images.unsplash.com/photo-1695378202330-4d0566dfec57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80","https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80","https://plus.unsplash.com/premium_photo-1668883188879-3a7acd2bec58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80","https://images.unsplash.com/photo-1695642579325-5d2d11fd9e36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80","https://images.unsplash.com/photo-1695597778289-fc1f5c715958?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80","https://plus.unsplash.com/premium_photo-1695517711308-f71ece6ded77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80","https://plus.unsplash.com/premium_photo-1673435845957-17f7b38f5dcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80","https://images.unsplash.com/photo-1682687980115-a37b56ea7271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80","https://plus.unsplash.com/premium_photo-1695517699512-a8abe3cc07b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80","https://images.unsplash.com/photo-1695378201929-c7e68a8102bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1924&q=80","https://images.unsplash.com/photo-1695235777899-2b422e2a94d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80","https://images.unsplash.com/photo-1693985319989-7952a07d0e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80","https://images.unsplash.com/photo-1682685797365-6f57bbebffed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80","https://images.unsplash.com/photo-1695378202330-4d0566dfec57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80","https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"],W=()=>{const t=Math.floor(Math.random()*b.length);return b[t]},Y=new Array(b.length).fill(1).map(()=>W());function V(t){return a(B,{...t,children:Y.map(o=>a(R,{loading:"lazy",src:o,alt:"랜덤 이미지"}))})}const d={render:t=>a(V,{...t}),args:{itemSize:300,fullScreen:!0,p:"36px",gap:"16px"}},u={render:t=>a(V,{...t}),args:{itemSize:400,smallItemSize:300,mediumItemSize:200,fullScreen:!0,px:"100px",gap:"8px",smallGap:"100px",largeGap:"10px"}},R=h.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;

  object-fit: cover;
`;var g,G,M;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <MasonryLayoutStory {...props} />,
  args: {
    itemSize: 300,
    fullScreen: true,
    p: '36px',
    gap: '16px'
  }
}`,...(M=(G=d.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var H,y,A;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: props => <MasonryLayoutStory {...props} />,
  args: {
    itemSize: 400,
    smallItemSize: 300,
    mediumItemSize: 200,
    fullScreen: true,
    px: '100px',
    gap: '8px',
    smallGap: '100px',
    largeGap: '10px'
  }
}`,...(A=(y=u.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const $=["ColumnMasonry","ResponsiveMasonry"];export{d as ColumnMasonry,u as ResponsiveMasonry,$ as __namedExportsOrder,C as default};
//# sourceMappingURL=MasonryLayout.stories-224b78c7.js.map
