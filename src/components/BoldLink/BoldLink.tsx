import React, { FC } from "react";
import { Link } from "react-router-dom";

interface IRouterBoldLink {
  to: string;
  text: string;
}

const RouterBoldLink: FC<IRouterBoldLink> = (props) => (
  <Link to={props.to} style={{
      backgroundColor: "tomato",
      padding: "2px 3px",
      fontWeight: "bold",
  }}>{props.text}</Link>
);
export default RouterBoldLink;
