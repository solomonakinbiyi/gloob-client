import axios from "axios";
import { useState, useContext } from "react";
import { UserContext } from "../context";
import People from "./cards/People";
import { toast } from "react-toastify";


const Search = () => {
  const [state, setState] = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const searchUser = async (e) => {
    e.preventDefault();
    // console.log(`Find "${query} from db`);
    try {
      const { data } = await axios.get(`/search-user/${query}`);
      // console.log('search user response => ', data);
      setResult(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleFollow = async (user) => {
    // console.log('add this user to folllowing list ', user);
    try {
      const { data } = await axios.put("/user-follow", { _id: user._id });
      // console.log("handle follow response => ", data);
      // update local storage, update user, keep token as it is
      let auth = JSON.parse(localStorage.getItem("auth"));
      auth.user = data;
      localStorage.setItem("auth", JSON.stringify(auth));
      // update context
      setState({ ...state, user: data });
      // update people state
      let filtered = result.filter((person) => person._id !== user._id);
      setResult(filtered);
      toast.success(`Following ${user.name}`);
    } catch (err) {
      console.log(err);
    }
  };
  const handleUnfollow = async (user) => {
    try {
      const { data } = await axios.put("/user-unfollow", { _id: user._id });
      let auth = JSON.parse(localStorage.getItem("auth"));
      auth.user = data;
      localStorage.setItem("auth", JSON.stringify(auth));
      // update context
      setState({ ...state, user: data });
      // update people state
      let filtered = result.filter((person) => person._id !== user._id);
      setResult(filtered);
      toast.error(`Unfollowed ${user.name}`);
    } catch (err) {}
  };
  return (
    <>
      <form className="from-inline row" onSubmit={searchUser}>
        <div className="col-8">
          <input
            type="search"
            onChange={(e) => {
              setQuery(e.target.value);
              setResult([]);
            }}
            value={query}
            className="form-control"
            placeholder="Search"
          />
        </div>
        <div className="col-4">
          <button className="btn btn-outline-primary col-12" type="submit">
            Search
          </button>
        </div>
      </form>
      {result &&
        result.map((r) => (
          <People
            key={r._id}
            people={result}
            handleFollow={handleFollow}
            handleUnfollow={handleUnfollow}
          />
        ))}
    </>
  );
};

export default Search;
