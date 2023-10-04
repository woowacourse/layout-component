import{j as o,a as h}from"./jsx-runtime-bc5d6cf6.js";import{r as f}from"./index-c013ead5.js";import{s as v,C as k}from"./common-ebccdf28.js";import"./_commonjsHelpers-725317a4.js";const E=v(k)`
  display: flex;
  justify-content: ${({justifyContent:t})=>t};
  align-items: ${({alignItems:t})=>t};
  flex-wrap: ${({flexWrap:t})=>t};
  flex-direction: ${({direction:t})=>t};
  gap: ${({gap:t})=>t};
`,i=f.forwardRef(function({css:m,as:w,children:y,...b},C){return o(E,{as:w,ref:C,style:m,...b,children:y})}),V={title:"Flex",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"text",defaultValue:"100%",description:"컴포넌트의 너비를 조정할 수 있습니다."},as:{control:"text",defaultValue:"div",description:"HTML 태그를 문자열로 입력해 원하는 HTML 태그로 사용할 수 있습니다."},fullScreen:{control:"boolean",description:"true로 지정하면 화면의 전체의 너비를 차지합니다. (100vw)"},css:{control:"object",description:"디테일 한 CSS 속성을 지정해야 할 경우 직접 CSS를 입력할 수 있습니다."},direction:{control:"text",defaultValue:"row",description:"flex의 방향을 조정할 수 있습니다. flex-direction 옵션입니다."},alignItems:{control:"text",defaultValue:"start",description:"align-items 옵션입니다."},flexWrap:{control:"text",defaultValue:"nowrap",description:"flex-wrap 옵션입니다."},justifyContent:{control:"text",defaultValue:"start",description:"justify-content 옵션입니다."},gap:{control:"text",description:"Flex 안의 자식들의 간격을 조정할 수 있습니다. 50%, 300px와 같이 문자열로 입력하여 사용할 수 있습니다."},m:{control:"text",description:"margin 옵션을 조정할 수 있습니다. EX) 10px, 10%"},ml:{control:"text",description:"margin-left 옵션을 조정할 수 있습니다. EX) 10px, 10%"},mr:{control:"text",description:"margin-right 옵션을 조정할 수 있습니다. EX) 10px, 10%"},mb:{control:"text",description:"margin-bottom 옵션을 조정할 수 있습니다. EX) 10px, 10%"},mt:{control:"text",description:"margin-top 옵션을 조정할 수 있습니다. EX) 10px, 10%"},mx:{control:"text",description:"margin에서 가로 옵션을 조정할 수 있습니다. EX) 10px, 10%"},my:{control:"text",description:"margin에서 세로 옵션을 조정할 수 있습니다. EX) 10px, 10%"},mxAuto:{control:"boolean",description:"margin에서 가로 옵션을 auto로 조정할 수 있습니다."},myAuto:{control:"boolean",description:"margin에서 세로 옵션을 auto로 조정할 수 있습니다."},p:{control:"text",description:"padding 옵션을 조정할 수 있습니다. EX) 10px, 10%"},pl:{control:"text",description:"padding-left 옵션을 조정할 수 있습니다. EX) 10px, 10%"},pr:{control:"text",description:"padding-right 옵션을 조정할 수 있습니다. EX) 10px, 10%"},pt:{control:"text",description:"padding-top 옵션을 조정할 수 있습니다. EX) 10px, 10%"},pb:{control:"text",description:"padding-bottom 옵션을 조정할 수 있습니다. EX) 10px, 10%"},px:{control:"text",description:"padding에서 가로 옵션을 조정할 수 있습니다. EX) 10px, 10%"},py:{control:"text",description:"padding에서 세로 옵션을 조정할 수 있습니다. EX) 10px, 10%"}}},e={render:t=>h(i,{...t,children:[o("div",{style:{width:"100px",height:"100px",backgroundColor:"pink"}}),o("div",{style:{width:"100px",height:"100px",backgroundColor:"yellow"}}),o("div",{style:{width:"100px",height:"100px",backgroundColor:"yellowgreen"}})]}),args:{css:{backgroundColor:"rgb(255,255,255)"},direction:"row",gap:"30px"}},n={render:t=>h(i,{...t,children:[o("div",{style:{width:"100px",height:"100px",backgroundColor:"pink"}}),o("div",{style:{width:"100px",height:"100px",backgroundColor:"yellow"}}),o("div",{style:{width:"100px",height:"100px",backgroundColor:"yellowgreen"}})]}),args:{css:{backgroundColor:"rgb(255,255,255)"},direction:"column",gap:"30px"}},r={render:t=>o(i,{...t,children:o("div",{style:{width:"100px",height:"100px",backgroundColor:"gray"}})}),args:{css:{border:"1px",backgroundColor:"pink",width:"100vw",height:"100vh"},alignItems:"center",justifyContent:"center"}};var p,l,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var s,c,a;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(a=(c=n.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};var x,g,u;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const $=["RowFlex","ColumnFlex","CenterFlex"];export{r as CenterFlex,n as ColumnFlex,e as RowFlex,$ as __namedExportsOrder,V as default};
//# sourceMappingURL=Flex.stories-3daee4ad.js.map
