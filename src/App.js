import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar'
import AddProducts from './components/Products/Products';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound';


const App = () => {
  const [search, setSearch] = useState("");

  // search
  const searchProduct = (e) => {
    setSearch(e.target.value)
  }

  return (
    <BrowserRouter>
      <div>
        <Navbar setSearch={setSearch}
        searchProduct={searchProduct}/>
          <Switch>
                <Route path="/" exact  render={() => ( <AddProducts search={search} />)} />
                <Route component={PageNotFound}/>
          </Switch>
          <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
