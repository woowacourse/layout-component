# Yummy Design Component (TS)

Hi! You can create website or app with this library.
Before using this, look through Storybook.

<a href="https://65054a5accdaa5b7c9142b51-xnzlkmufgn.chromatic.com/?path=/docs/instruction--docs">📚 **Storybook**</a>

<br />
<br />

## Get started!

### ✅ 1. Install this library.

**npm**

```
npm i yummy-design-component
```

**yarn**

```
yarn add yummy-design-component
```

### ✅ 2. Import components into your file.

```tsx
import { Container } from 'yummy-design-component';
import { FlexContainer } from 'yummy-design-component';
import { FlexItem } from 'yummy-design-component';
import { Grid } from 'yummy-design-component';
```

### ✅ 3. Use it like this!

```tsx
// Header.tsx

const Header = () => {
  return (
    <FlexContainer tag="header" layout="centerLeft" columnGap={12} px={16}>
      <h1 css={{ fontWeight: 600, fontSize: 16 }}>LOGO</h1>
      <nav>
        <FlexContainer tag="ul" columnGap={12}>
          {Array.from({ length: 4 }, (_, index) => (
            <li>
              <a href={`/MENU${index}`} key={index}>
                MENU{index + 1}
              </a>
            </li>
          ))}
        </FlexContainer>
      </nav>
      <button type="button" aria-label="login" css={{ marginLeft: 'auto' }}>
        LOGIN
      </button>
    </FlexContainer>
  );
};
```

<br />

## Development Environment

- `react (with vite)`
- `typeScript`
- `emotion`

## Browser Support

<table>
  <tr>
    <td align="center" width="150px">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1200px-Google_Chrome_icon_%28February_2022%29.svg.png" alt="Chrome icon" />
    </td>
    <td align="center" width="150px">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Safari_browser_logo.svg/2057px-Safari_browser_logo.svg.png" alt="Safari icon" />
    </td>
  </tr>
  <tr>
    <td align="center">
      Latest ✓
    </td>
    <td align="center">
      Latest ✓
    </td>
  </tr>
</table>
