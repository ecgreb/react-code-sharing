# React Code Sharing Spike

Simple demo app to test react component code sharing

## Getting started

```bash
% git clone git@github.com:ecgreb/react-code-sharing.git
% cd react-code-sharing
% yarn install
% yarn start
```

## Structure

Basic react app created using `npx create-react-app my-app --template typescript`. The app includes a simple button and a click counter.

## Code sharing

Three custom "Header" components are added using various techniques for sharing data and code between components.

### Header1

`Header1` is a non-reusable component that does not enable any sort of code sharing. Current click count is passed as a value prop. Rendering is private to the component.

```tsx
interface Header1Props {
  count: number;
}

const Header1: FC<Header1Props> = ({ count }) => {
  return (
    <div>
      <p>
        Count = {count}
      </p>
    </div>);
};
```

### Header2

`Header2` passes rendering details using the special [`children` prop](https://reactjs.org/docs/composition-vs-inheritance.html). This approach allows for arbitrary rendering of nested elements providing a greater degree of flexibility and code re-use. 

```tsx
interface Header2Props {
  children: ReactNode;
}

const Header2: FC<Header2Props> = ({ children }) => {
  return (
    <div>
      {children}
    </div>);
};
```

### Header3
`Header3` passes rendering details in a function using a [Render Prop](https://reactjs.org/docs/render-props.html). This approach allows for full inversion of control and type safety of associated value props and the render function itself. It provides an even greater degree of flexibility and re-usability.

```tsx
interface Header3Props {
  count: number;
  render: (count: number) => ReactNode;
}

const Header3: FC<Header3Props> = ({ count, render }) => {
  return (
    <div>
      {render(count)}
    </div>
  );
};
```

While [custom hooks](https://reactjs.org/docs/hooks-custom.html) allow sharing of logic between components, Render Props allow for sharing of rendering code too.

## Performance

As a rough measure of performance, the render count of each component is tracked and logged to the console using a ref counter.

```ts
const ref = useRef(0);
ref.current++;
console.log('Header3 render count = ' + ref.current);
```

In this basic example, the number of renders is the same for each version of the component suggesting Render Props do not necessarily lead to a performance tax.

![](screen.png)

However, if we dig a little deeper, and add a render counter to the render prop itself, we can see that the render prop functions is called slightly more often than the full `Header3` component renders itself.

```tsx
<Header3 count={count} render={(count) => {
  ref.current++;
  console.log('Render Prop render count = ' + ref.current);
  return (
    <p>
      Count = {count}
    </p>
  )
}}/>
```

Theoretically, this cost can be reduced by wrapping the render function with `useMemo(...)` however in this example it does not produce a noticeable benefit since the sole dependency `[count]` changes on each click.

```ts
const render = useMemo(() => {
  return (count: number) => {
    ref.current++;
    console.log('Render Prop render count = ' + ref.current);
    return (
      <p>
        Count = {count}
      </p>
    )
  }
}, [count]);
```

![](screen2.png)

## Conclusions

* While incurring a small performance hit in the increased number of render passes, Render Props are a viable option for sharing logic _and_ rendering code between multiple react components.
* Performance can be improved by wrapping render functions with the `useMemo(...)` hook.
* More testing is needed for more complex components.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
