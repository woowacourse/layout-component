import{j as r}from"./jsx-runtime-6eef64cc.js";import{r as b}from"./index-c013ead5.js";import{s as v,C as f}from"./common-ebccdf28.js";import"./_commonjsHelpers-725317a4.js";const k=v(f)`
  display: flex;
  justify-content: ${({justifyContent:e})=>e};
  align-items: ${({alignItems:e})=>e};
  flex-wrap: ${({flexWrap:e})=>e};
  flex-direction: ${({direction:e})=>e};
  gap: ${({gap:e})=>e};
`,s=b.forwardRef(function({css:h,as:w,children:m,...y},C){return r.jsx(k,{as:w,ref:C,style:h,...y,children:m})}),$={title:"Flex",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"text",defaultValue:"100%",description:"컴포넌트의 너비를 조정할 수 있습니다."},as:{control:"text",defaultValue:"div",description:"HTML 태그를 문자열로 입력해 원하는 HTML 태그로 사용할 수 있습니다."},fullScreen:{control:"boolean",description:"true로 지정하면 화면의 전체의 너비를 차지합니다. (100vw)"},css:{control:"object",description:"디테일 한 CSS 속성을 지정해야 할 경우 직접 CSS를 입력할 수 있습니다."},direction:{control:"text",defaultValue:"row",description:"flex의 방향을 조정할 수 있습니다. flex-direction 옵션입니다."},alignItems:{control:"text",defaultValue:"start",description:"align-items 옵션입니다."},flexWrap:{control:"text",defaultValue:"nowrap",description:"flex-wrap 옵션입니다."},justifyContent:{control:"text",defaultValue:"start",description:"justify-content 옵션입니다."},gap:{control:"text",description:"Flex 안의 자식들의 간격을 조정할 수 있습니다. 50%, 300px와 같이 문자열로 입력하여 사용할 수 있습니다."}}},n={render:e=>r.jsxs(s,{...e,children:[r.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"pink"}}),r.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"yellow"}}),r.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"yellowgreen"}})]}),args:{css:{backgroundColor:"rgb(255,255,255)"},direction:"row",gap:"30px"}},o={render:e=>r.jsxs(s,{...e,children:[r.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"pink"}}),r.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"yellow"}}),r.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"yellowgreen"}})]}),args:{css:{backgroundColor:"rgb(255,255,255)"},direction:"column",gap:"30px"}},t={render:e=>r.jsx(s,{...e,children:r.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"gray"}})}),args:{css:{border:"1px",backgroundColor:"pink",width:"100vw",height:"100vh"},alignItems:"center",justifyContent:"center"}};var i,l,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: props => <Flex {...props}>
      <div style={{
      width: '100px',
      height: '100px',
      backgroundColor: 'pink'
    }}></div>
      <div style={{
      width: '100px',
      height: '100px',
      backgroundColor: 'yellow'
    }}></div>
      <div style={{
      width: '100px',
      height: '100px',
      backgroundColor: 'yellowgreen'
    }}></div>
    </Flex>,
  args: {
    css: {
      backgroundColor: 'rgb(255,255,255)'
    },
    direction: 'row',
    gap: '30px'
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var a,p,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: props => <Flex {...props}>
      <div style={{
      width: '100px',
      height: '100px',
      backgroundColor: 'pink'
    }}></div>
      <div style={{
      width: '100px',
      height: '100px',
      backgroundColor: 'yellow'
    }}></div>
      <div style={{
      width: '100px',
      height: '100px',
      backgroundColor: 'yellowgreen'
    }}></div>
    </Flex>,
  args: {
    css: {
      backgroundColor: 'rgb(255,255,255)'
    },
    direction: 'column',
    gap: '30px'
  }
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var x,g,u;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <Flex {...props}>
      <div style={{
      width: '100px',
      height: '100px',
      backgroundColor: 'gray'
    }}></div>
    </Flex>,
  args: {
    css: {
      border: '1px',
      backgroundColor: 'pink',
      width: '100vw',
      height: '100vh'
    },
    alignItems: 'center',
    justifyContent: 'center'
  }
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const R=["RowFlex","ColumnFlex","CenterFlex"];export{t as CenterFlex,o as ColumnFlex,n as RowFlex,R as __namedExportsOrder,$ as default};
//# sourceMappingURL=Flex.stories-140c1776.js.map
