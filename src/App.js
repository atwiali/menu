import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import Items from "./components/Items";
import { items } from "./Data";
import { useState } from "react";

const App = () => {
  const [itemsData, setitemsData] = useState(items);
  const allCategory = ["ALL", ...new Set(items.map((i) => i.category))];
  console.log(allCategory);

  //Filter by category
  const filterbyCategory = (cat) => {
    if (cat === "ALL") {
      setitemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setitemsData(newArr);
    }
  }
  //Filter by search 
  const filterbysearch = (word) => {
    if (word !=="") {
    
      const newArr = items.filter((item) => item.title === word);
      setitemsData(newArr);
    }
  }
  return (
    <div>
      <NavBar />
      <Container>
        <Header />
        <Category
          filterbyCategory={filterbyCategory}
          allCategory={allCategory}
        />
        <Items itemsData={itemsData} />
      </Container>
    </div>
  );
};
export default App;
