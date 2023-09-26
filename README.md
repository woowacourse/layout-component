## ✅ Tab Layout

### Installation

```
$ npm i navrary-layout

```

### ✅ Usage

```ts
import { Tab } from "navrary-layout";

const MyTab = () => {
  return (
    <Tab>
      <Tab.List className="list">
        <Tab.Trigger value="1" />
        <Tab.Trigger value="2" />
      </Tab.List>
      <Tab.Content value="1">
        <div>first tab</div>
      </Tab.Content>
      <Tab.Content value="2">
        <div>first tab</div>
      </Tab.Content>
    </Tab>
  );
};
```

### ✅ Requirements

- Duplicate values are not allowed.

```
Use the value without duplication.
```

- The value of the content component must be one of the values used in the trigger.

```
Use the same value as the Trigger component
```
