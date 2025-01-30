// import React, { useState } from "react";
// import MyComponent from "./components/MyComponent/MyComponent";

import React, { lazy, Suspense } from "react";

const LazyA = lazy(() => import("./components/Lazy/LazyA"));
const LazyB = lazy(() => import("./components/Lazy/LazyB"));

function App() {
  // const [count, setCount] = useState(0);
  // const [value, setValue] = useState("Detta är ett statiskt värde");

  return (
    <main>
      {/* <h1>React.memo Demo</h1>
      <button onClick={() => setCount(count + 1)}>Öka: {count}</button>
      <button onClick={() => setValue("Ett nytt värde")}>Ändra: {value}</button>
      <MyComponent value={value} /> */}

      <h1>Lazy Loading Demo</h1>
      <Suspense fallback={<p>LazyA komponenten laddas</p>}>
      <LazyA />
      </Suspense>
      <Suspense fallback={<p>LazyB komponenten laddas</p>}>
      <LazyB />
      </Suspense>
    </main>
  );
}

export default App;
