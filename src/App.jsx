// import LazyLoading from "./LazyLoading"
import React, { Suspense } from "react"
const LazyLoading = React.lazy(()=>import('./LazyLoading'))

function App() {


  return (
    <>
      <h1>this is a loading component</h1>
      <Suspense fallback={<div>Loading ...</div>}> 
        <LazyLoading/>
      </Suspense>

    </>
  )
}

export default App
