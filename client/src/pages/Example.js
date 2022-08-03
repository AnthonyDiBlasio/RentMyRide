import { Link } from "react-router-dom";
import Sample from "../components/Sample";

function Example() {
  return (
    <div>
      <p>Example Page</p>
      <Sample title="example 1" />
      <Sample title="example 2" />
      <Link to="/">Home</Link>
    </div>
  );
}

export default Example;
