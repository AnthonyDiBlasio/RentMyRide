import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1>Rent My Ride</h1>
      <Link to="/example">click here to view an example page</Link>
    </div>
  );
}

export default Homepage;
