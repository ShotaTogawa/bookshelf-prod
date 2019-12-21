import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRouter";
import history from "./history";

import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Home from "./components/home/Home";
import CreateBook from "./components/mypage/content/book/CreateBook";
import BookTable from "./components/mypage/content/table/BookTable";
import BookInfo from "./components/mypage/content/book/BookInfo";
import UserPage from "./components/mypage/content/user/UserPage";
import SearchBook from "./components/mypage/content/book/SearchBook";
import Timeline from "./components/mypage/content/table/Timeline";

const Base = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <PrivateRoute path="/user" exact component={UserPage} />
        <PrivateRoute path="/book" exact component={CreateBook} />
        <PrivateRoute path="/book/search" exact component={SearchBook} />
        <PrivateRoute path="/books" exact component={BookTable} />
        <PrivateRoute path="/book/:id" exact component={BookInfo} />
        <PrivateRoute path="/timeline" exact component={Timeline} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
};

export default Base;
