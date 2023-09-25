import{j as t}from"./jsx-runtime-6eef64cc.js";import{r as C}from"./index-c013ead5.js";import{s as f,C as h}from"./common-ebccdf28.js";import"./_commonjsHelpers-725317a4.js";const y=f(h)`
  min-width: ${({minWidth:n})=>n};
  max-width: ${({maxWidth:n})=>n};
`,o=C.forwardRef(function({css:l,as:x,children:m,...u},g){return t.jsx(y,{ref:g,as:x,style:{...l},...u,children:m})}),w={title:"Container",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"text",defaultValue:"100%",description:"컴포넌트의 너비를 조정할 수 있습니다."},as:{control:"text",defaultValue:"div",description:"HTML 태그를 문자열로 입력해 원하는 HTML 태그로 사용할 수 있습니다."},fullScreen:{control:"boolean",description:"true로 지정하면 화면의 전체의 너비를 차지합니다. (100vw)"},css:{control:"object",description:"디테일 한 CSS 속성을 지정해야 할 경우 직접 CSS를 입력할 수 있습니다."},maxWidth:{control:"text",description:"컴포넌트의 최소 너비를 지정하는 옵션입니다. 500px, 50%와 같이 문자열로 사용할 수 있습니다."},minWidth:{control:"text",description:"컴포넌트의 최대 너비를 지정하는 옵션입니다. 500px, 50%와 같이 문자열로 사용할 수 있습니다."}}},e={render:n=>t.jsx(o,{css:{backgroundColor:"rgb(250,224,240)",justifyContent:"center",display:"flex"},children:t.jsx(o,{...n,children:t.jsx("div",{style:{height:"600px",background:"rgb(253,247,251)",justifyContent:"center",alignItems:"center",display:"flex",fontSize:"28px"},children:"maxWidth:500"})})}),args:{css:{backgroundColor:"rgb(250,224,240)",justifyContent:"center",display:"flex"},width:"1000px",maxWidth:"500px"}},r={render:n=>t.jsx(o,{...n,children:t.jsx("div",{style:{backgroundColor:"rgb(253,247,251)",height:"600px",justifyContent:"center",alignItems:"center",display:"flex",fontSize:"28px"},children:"minWidth:300"})}),args:{width:"100px",minWidth:"300px"}};var i,s,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var d,c,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const k=["MaxContainer","MinContainer"];export{e as MaxContainer,r as MinContainer,k as __namedExportsOrder,w as default};
//# sourceMappingURL=Container.stories-0f2183d0.js.map
