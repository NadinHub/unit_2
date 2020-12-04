import React from "react"
import Nav from './Nav'

function Header(props) {
    // console.log(props.nav)
    // console.log(props)
  return (
    <header>
      <h1>{props.site_name}</h1>
      <h2>{props.site_title}</h2>
      {/* <Nav /> */}
      <Nav data={props.nav1} />
    </header>
  );
}

export default Header