import{j as o}from"./jsx-runtime-6eef64cc.js";import{r as b}from"./index-c013ead5.js";import{s as k,C as _}from"./common-ebccdf28.js";import"./_commonjsHelpers-725317a4.js";const p=r=>typeof r=="number"?`repeat(${r}, 1fr)`:r,C=k(_)`
  display: grid;
  grid-template-columns: ${({columns:r=1})=>p(r)};
  grid-template-rows: ${({rows:r=1})=>p(r)};

  gap: ${({gap:r})=>r};
  row-gap: ${({rowGap:r})=>r};
  column-gap: ${({columnGap:r})=>r};
`,i=b.forwardRef(function({css:n,as:e,children:h,...f},G){return o.jsx(C,{as:e,ref:G,style:n,...f,children:h})}),q={title:"Grid",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"text",defaultValue:"100%",description:"컴포넌트의 너비를 조정할 수 있습니다."},as:{control:"text",defaultValue:"div",description:"HTML 태그를 문자열로 입력해 원하는 HTML 태그로 사용할 수 있습니다."},fullScreen:{control:"boolean",description:"true로 지정하면 화면의 전체의 너비를 차지합니다. (100vw)"},css:{control:"object",description:"디테일 한 CSS 속성을 지정해야 할 경우 직접 CSS를 입력할 수 있습니다."},columns:{control:"text",description:"숫자 혹은 문자열을 넣어 grid-template-columns를 조정할 수 있습니다. 숫자를 넣었을 때는 repeat(columns, 1fr)로 설정되고, 문자열에서 설정한 값 그대로 적용됩니다."},rows:{control:"text",description:"숫자 혹은 문자열을 넣어 grid-template-rows 조정할 수 있습니다. 숫자를 넣었을 때는 repeat(rows, 1fr)로 설정되고, 문자열에서 설정한 값 그대로 적용됩니다."},gap:{control:"text",description:"Grid 안의 자식들의 간격을 조정할 수 있습니다. 50%, 300px와 같이 문자열로 입력하여 사용할 수 있습니다."},rowGap:{control:"text",description:"row 방향의 간격을 조정할 수 있습니다. 50%, 300px와 같이 문자열로 입력하여 사용할 수 있습니다."},columnGap:{control:"text",description:"column 방향의 간격을 조정할 수 있습니다. 50%, 300px와 같이 문자열로 입력하여 사용할 수 있습니다."}}},a={render:r=>o.jsx(i,{...r,children:new Array(9).fill(1).map((n,e)=>o.jsx("div",{style:{display:"block",height:"200px",width:"200px",backgroundColor:"aquamarine"}},e))}),args:{rows:3,columns:3,gap:"30px"}},t={render:r=>o.jsx(i,{...r,children:new Array(9).fill(1).map((n,e)=>o.jsx("div",{style:{display:"block",height:"200px",width:"200px",backgroundColor:"aquamarine"}},e))}),args:{rows:3,rowGap:"30px"}},s={render:r=>o.jsx(i,{...r,children:new Array(9).fill(1).map((n,e)=>o.jsx("div",{style:{display:"block",height:"200px",width:"200px",backgroundColor:"aquamarine"}},e))}),args:{columns:5,gap:"30px"}};var d,l,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: props => <Grid {...props}>
      {new Array(9).fill(1).map((__, index) => <div key={index} style={{
      display: 'block',
      height: '200px',
      width: '200px',
      backgroundColor: 'aquamarine'
    }}></div>)}
    </Grid>,
  args: {
    rows: 3,
    columns: 3,
    gap: '30px'
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,u,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: props => <Grid {...props}>
      {new Array(9).fill(1).map((__, index) => <div key={index} style={{
      display: 'block',
      height: '200px',
      width: '200px',
      backgroundColor: 'aquamarine'
    }}></div>)}
    </Grid>,
  args: {
    rows: 3,
    rowGap: '30px'
  }
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,w,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <Grid {...props}>
      {new Array(9).fill(1).map((__, index) => <div key={index} style={{
      display: 'block',
      height: '200px',
      width: '200px',
      backgroundColor: 'aquamarine'
    }}></div>)}
    </Grid>,
  args: {
    columns: 5,
    gap: '30px'
  }
}`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};const A=["ThreeGrid","RowsGrid","ColumnsGrid"];export{s as ColumnsGrid,t as RowsGrid,a as ThreeGrid,A as __namedExportsOrder,q as default};
//# sourceMappingURL=Grid.stories-83f8d753.js.map
