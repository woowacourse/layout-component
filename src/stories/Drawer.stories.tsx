import type { Meta, StoryObj } from "@storybook/react";
import Drawer from "../components/Drawer";
import { Fragment, useState } from "react";

const meta = {
  title: "Layout/Drawer",
  component: Drawer,

  parameters: {
    docs: {
      description: {
        component:
          "화면의 한쪽에서 슬라이드 형태로 나타나는 메뉴나 사이드바를 제공하는 컴포넌트",
      },
    },
  },
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Drawer 컴포넌트가 열려있는지 닫혀있는지 나타내는 상태",
    },
    onClose: {
      control: "function",
      description:
        "Drawer 컴포넌트가 열려있는지 닫혀있는지 나타내는 상태를 조작하는 함수",
    },
    anchor: {
      control: "select",
      options: ["left", "top", "right", "bottom"],
      description: "Drawer 컴포넌트가 보여질 위치, 위/아래/왼쪽/오른쪽",
      table: {
        defaultValue: { summary: "left" },
      },
    },

    isBackdrop: {
      control: "boolean",
      description: "Drawer 컴포넌트의 BackDrop의 유무",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    width: {
      control: "text",
      description: "Drawer 컴포넌트의 최대 넓이",
      table: {
        defaultValue: { summary: "auto or 250px" },
      },
    },
    height: {
      control: "text",
      description: "Drawer 컴포넌트의 최대 높이",
      table: {
        defaultValue: { summary: "100% or auto" },
      },
    },
    zIndex: {
      control: "text",
      description: "Drawer 컴포넌트의 상대적 위치",
      table: {
        defaultValue: { summary: "1" },
      },
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultStory = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const list = (
    <li style={{ listStyle: "none" }}>
      {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
        <ul key={text} style={{ margin: 0, padding: 0 }}>
          <button
            style={{
              display: "flex",
              gap: "20px",
              color: "initial",
              border: 0,
              cursor: "pointer",
              backgroundColor: "transparent",
            }}
          >
            {index % 2 === 0 ? (
              <p style={{ width: "10px" }}>💗</p>
            ) : (
              <p style={{ width: "10px" }}>👻</p>
            )}

            <p>{text}</p>
          </button>
        </ul>
      ))}
    </li>
  );

  return (
    <div>
      {(["left", "right", "top", "bottom"] as const).map((anchor) => (
        <Fragment key={anchor}>
          <button onClick={() => setState({ ...state, [anchor]: true })}>
            {anchor}
          </button>
          <Drawer
            anchor={anchor}
            isOpen={state[anchor]}
            onClose={() => setState({ ...state, [anchor]: false })}
          >
            {list}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
};
export const Default: Story = {
  render: () => <DefaultStory />,
  args: {
    isOpen: true,
    onClose: () => alert("Clicked!"),
  },
};
