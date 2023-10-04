import{j as n,F as h}from"./jsx-runtime-bc5d6cf6.js";import{r as f}from"./index-c013ead5.js";import{s as C,C as y}from"./common-ebccdf28.js";import"./_commonjsHelpers-725317a4.js";const b=C(y)`
  min-width: ${({minWidth:t})=>t};
  max-width: ${({maxWidth:t})=>t};
`,o=f.forwardRef(function({css:l,as:x,children:m,...g},u){return n(h,{children:n(b,{ref:u,as:x,style:{...l},...g,children:m})})}),W={title:"Container",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"text",defaultValue:"100%",description:"컴포넌트의 너비를 조정할 수 있습니다."},as:{control:"text",defaultValue:"div",description:"HTML 태그를 문자열로 입력해 원하는 HTML 태그로 사용할 수 있습니다."},fullScreen:{control:"boolean",description:"true로 지정하면 화면의 전체의 너비를 차지합니다. (100vw)"},css:{control:"object",description:"디테일 한 CSS 속성을 지정해야 할 경우 직접 CSS를 입력할 수 있습니다."},maxWidth:{control:"text",description:"컴포넌트의 최대 너비를 지정하는 옵션입니다. 500px, 50%와 같이 문자열로 사용할 수 있습니다."},minWidth:{control:"text",description:"컴포넌트의 최소 너비를 지정하는 옵션입니다. 500px, 50%와 같이 문자열로 사용할 수 있습니다."},m:{control:"text",description:"margin 옵션을 조정할 수 있습니다. EX) 10px, 10%"},ml:{control:"text",description:"margin-left 옵션을 조정할 수 있습니다. EX) 10px, 10%"},mr:{control:"text",description:"margin-right 옵션을 조정할 수 있습니다. EX) 10px, 10%"},mb:{control:"text",description:"margin-bottom 옵션을 조정할 수 있습니다. EX) 10px, 10%"},mt:{control:"text",description:"margin-top 옵션을 조정할 수 있습니다. EX) 10px, 10%"},mx:{control:"text",description:"margin에서 가로 옵션을 조정할 수 있습니다. EX) 10px, 10%"},my:{control:"text",description:"margin에서 세로 옵션을 조정할 수 있습니다. EX) 10px, 10%"},mxAuto:{control:"boolean",description:"margin에서 가로 옵션을 auto로 조정할 수 있습니다."},myAuto:{control:"boolean",description:"margin에서 세로 옵션을 auto로 조정할 수 있습니다."},p:{control:"text",description:"padding 옵션을 조정할 수 있습니다. EX) 10px, 10%"},pl:{control:"text",description:"padding-left 옵션을 조정할 수 있습니다. EX) 10px, 10%"},pr:{control:"text",description:"padding-right 옵션을 조정할 수 있습니다. EX) 10px, 10%"},pt:{control:"text",description:"padding-top 옵션을 조정할 수 있습니다. EX) 10px, 10%"},pb:{control:"text",description:"padding-bottom 옵션을 조정할 수 있습니다. EX) 10px, 10%"},px:{control:"text",description:"padding에서 가로 옵션을 조정할 수 있습니다. EX) 10px, 10%"},py:{control:"text",description:"padding에서 세로 옵션을 조정할 수 있습니다. EX) 10px, 10%"}}},e={render:t=>n(o,{css:{backgroundColor:"rgb(250,224,240)",justifyContent:"center",display:"flex"},children:n(o,{...t,children:n("div",{style:{height:"600px",background:"rgb(253,247,251)",justifyContent:"center",alignItems:"center",display:"flex",fontSize:"28px"},children:"maxWidth:500"})})}),args:{css:{backgroundColor:"rgb(250,224,240)",justifyContent:"center",display:"flex"},width:"1000px",maxWidth:"500px"}},r={render:t=>n(o,{...t,children:n("div",{style:{backgroundColor:"rgb(253,247,251)",height:"600px",justifyContent:"center",alignItems:"center",display:"flex",fontSize:"28px"},children:"minWidth:300"})}),args:{width:"100px",minWidth:"300px"}};var i,a,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: props => <Container css={{
    backgroundColor: 'rgb(250,224,240)',
    justifyContent: 'center',
    display: 'flex'
  }}>
      <Container {...props}>
        <div style={{
        height: '600px',
        background: 'rgb(253,247,251)',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        fontSize: '28px'
      }}>
          maxWidth:500
        </div>
      </Container>
    </Container>,
  args: {
    css: {
      backgroundColor: 'rgb(250,224,240)',
      justifyContent: 'center',
      display: 'flex'
    },
    width: '1000px',
    maxWidth: '500px'
  }
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var s,c,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => <Container {...props}>
      <div style={{
      backgroundColor: 'rgb(253,247,251)',
      height: '600px',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      fontSize: '28px'
    }}>
        minWidth:300
      </div>
    </Container>,
  args: {
    width: '100px',
    minWidth: '300px'
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const w=["MaxContainer","MinContainer"];export{e as MaxContainer,r as MinContainer,w as __namedExportsOrder,W as default};
//# sourceMappingURL=Container.stories-8521c462.js.map
