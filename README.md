## Getting Started with light-layout-component

Try using a `Container`, `Flex`, `Grid` as layout component from where you want to use it!

## `Installation`

```bash
npm install light-layout-component

or

yarn add light-layout-component
```

---

## 1. `Container`

It's the most basic layout element. You can wrap childrens or design background.

## `Props`

All props are optional.

#### `children`?: ReactNode

#### `as`?: | "div" | "main" | "section" | "article" | "nav" | "header" | "footer" | "aside";

- default value: "div"
- a name of tag for semantic layout

#### `mediaTarget`?: "mobile" | "tablet" | "desktop"

- It provides appropiate minWidth and maxWidth responding to media target.

#### `minWidth`?: string

#### `maxWidth`?: string;

#### `minHeight`?: string;

#### `maxHeight`?: string;

#### `padding`?: string;

#### `margin`?: string;

#### `background`?: string;

#### `borderRadius`?: string;

#### `border`?: string;

#### `overflow`?: string;

## `Example`

```html
<Container
  as="div"
  minWidth="100px"
  maxWidth="110px"
  minHeight="200px"
  maxHeight="300px"
  background="pink"
>
  It's Container
</Container>
```

---

## 2. `Flex`

Flex component can quickly manage the alignment of its children components.

## `Props`

All props are optional.

#### `children`?: ReactNode

#### `direction`?: "column" | "column-reverse" | "row" | "row-reverse"

- default value: "row"
- a direction of Flex

#### `justify`?: CSS.Property.JustifyContent

- default value: "flex-start"

#### `align`?: CSS.Property.AlignItems

- default value: "flex-start"

#### `gap`?: string;

- a gap of children components

## `Example`

```html
<Flex justify="center" align="center" gap="10px">
  <button>1</button>
  <button>2</button>
  <button>3</button>
</Flex>
```

---

## 3. `Grid`

Grid layout is a two-dimensional layout system. This feature allows you to content in rows and columns.

## `Props`

`rows` and `columns` are required.

#### `children`?: ReactNode

#### `rows`: string

#### `columns`: string

#### `gap`?: string

#### `isAutoFill`?: string

- When true, It fills as many columns as the width fits.

## `Example`

```html
<Grid rows="2" columns="3" gap="10px">
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>1</button>
  <button>2</button>
  <button>3</button>
</Grid>
```

---

## 4. `TabLayout`

## `Props`

`tabsMenu` is required.

#### `children`?: ReactNode[]

#### `tabWidth`: `${number}px` | `${number}rem` | `${number}em` | `${number}vw` | `${number}%`

#### `tabMenuHeight`: `${number}px` | `${number}rem` | `${number}em` | `${number}vw` | `${number}%`

#### `tabMenuFontSize`?: string

#### `tabMenuBorderBottomColor`?: string

#### `defaultTabIndex?`: number;

## `Example`

```html
<TabLayout tabsMenu={["tab1", "tab2", "tab3"]} tabWidth="50%">
  <div>first Tab</div>
  <div>second Tab</div>
  <button>third Tab</button>
</TabLayout>
```
