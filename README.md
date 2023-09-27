# Rego's Layout Components

## Container

### introduction

This is just simple `Container` that you can use.

You can control options(ex.minWidth) of `Container` with props.

**example**

```tsx
<Container minWidth={100} maxWidth={200}>
  <div>Hello, World!</div>
</Container>
```

### options

There are several options for `Container`. I'll describe all of options for you.

1. `minWidth`: The `minWidth` setting requires `number(px)` or `string(n%)` to be entered(default: '100%').

**example of `number`**

```tsx
<Container minWidth={100}>Hello, World!</Container>
```

**example of `string`**

```tsx
<Container minWidth={'100%'}>Hello, World!</Container>
```

2. `maxWidth`: The `maxWidth` setting requires `number(px)` or `string(n%)` to be entered(default: '100%').

3. `overflow`: You can decide on the `overflow` option among the following options.

   > auto | scroll | hidden | visible

4. `padding`: You can determine `padding` by entering `number` for `Container`

5. `borderRadius`: The `borderRadius` setting requires `number(px)` or `string(n%)` to be entered.

**example of `number`**

```tsx
<Container borderRadius={8}>Hello, World!</Container>
```

**example of `string`**

```tsx
<Container borderRadius={'50%'}>Hello, World!</Container>
```

6. `background`: The `background` setting requires `string` that color name(ex.red, white) or Hex(ex. #ffffff)(default: 'white').

---

## Grid

### introduction

This is simple `Gird` layout component.

You can control number of `Grid`'s columns, rows with props.

**example**

```tsx
<Grid column={3} row={3} gap={10}>
  <div>first</div>
  <div>second</div>
  <div>third</div>
  <div>fourth</div>
  <div>fifth</div>
  <div>sixth</div>
</Grid>
```

### options

1. `column`: The `column` decides value of `repeat($value, 1fr)` attribute by entering `number`.

2. `row`: The `row` decides value of `repeat($value, 1fr)` attribute by entering `number` like `column` does.

3. `gap`: The `gap` decides gap of columns and rows by entering `number`.

4. `padding`: You can determine `padding` by entering `number` for `Grid`

---

## Flex

### introduction

This is simple `Flex` component you can use.

There are several options you can control. `direction`, `justify`, and so on.

### options

1. `direction`: You can decide on the `direction` option among the following options.

   > row | column

2. `justify`: You can decide on the `justify` option among the following options.

   > center | baseline | flex-start | flex-end | space-around | space-between | space-evenly

3. `align`: You can decide on the `align` option among the following options.

   > center | flex-start | flex-end

4. `gap`: The `gap` decides gap of columns and rows by entering `number`.

5. `padding`: You can determine `padding` by entering `number` for `Grid`

---

## Drawer

### introduction

This `Drawer`

**example**

```tsx
import { Drawer, useDrawer } from 'rego-layout-component';

// ...

const { isOpen, closeDrawer, openDrawer } = useDrawer();

return (
  <div>
    <button onClick={openDrawer}>open drawer</button>
    <Drawer anchor="left" isOpen={isOpen} closeDrawer={closeDrawer} padding={1}>
      <>Home</>
      <>MyPage</>
      <>Setting</>
    </Drawer>
  </div>
);
```

### options

1. `anchor`: You can decide on the `direction` option among the following options.

   > 'left' | 'right' | 'top' | 'bottom'

2. `isOpen`: You can control `Drawer`'s state by `isOpen`.

3. `padding`: You can determine `padding` by entering `number` for `Grid`
