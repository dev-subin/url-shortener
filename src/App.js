import { useState } from "react";
import Footer from "./Footer";
import HeadreUrl from "./HeadreUrl";
import UrlShortener from "./UrlShortener";

function App() {
  const [inputValue,setInputValue] =useState('')
  return (
    <div className="App">
      <HeadreUrl/>
   <UrlShortener/>
   <Footer/>
    </div>
  );
}

export default App;
