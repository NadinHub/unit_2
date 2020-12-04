function Nav(props) {
  let data = props.data;
  //   const listItem = data.map((item) => (
  //     <li>
  //       <a href={item.link}> {item.text}</a>
  //     </li>
  //   ));
  console.log(props)
  console.log(data); // array with objects (link and text)
  return (
    <nav>
      <ul className="main-navigation">
        {/* {listItem} */}
        {/* {data} */}
        {/* {data[0].link} */}

        {/* <li>
          <a href={data[0].link}>{data[0].text}</a>
        </li> */}
      </ul>
    </nav>
  );
}

export default Nav;
