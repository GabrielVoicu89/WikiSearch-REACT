function List(props) {
  return (
    <li key={props.index}>
      <a href={props.content} target="_blank">
        {props.content}
      </a>
    </li>
  );
}
export default List;
