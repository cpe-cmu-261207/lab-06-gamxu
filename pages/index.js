import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import { useState } from "react";
import axios from "axios";
import UserCard from "./components/UserCard";

export default function Home() {
  const [numInput, setNumInput] = useState("1");
  const [users, setUsers] = useState([]);

  const genUsers = async () => {
    if (numInput < 1) {
      alert("Invalid number of user");
      return;
    }
    const resp = await axios.get(
      `https://randomuser.me/api/?results=${numInput}`
    );

    const newUsers = [];
    for (const guy of resp.data.results) {
      newUsers.push({
        name: `${guy.name.first} ${guy.name.last}`,
        email: guy.email,
        imgLink: guy.picture.large,
        location:
          guy.location.city +
          " " +
          guy.location.state +
          " " +
          guy.location.country +
          " " +
          guy.location.postcode,
      });
    }
    setUsers(newUsers);
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>

      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          onChange={(event) => {
            setNumInput(event.target.value);
          }}
          value={numInput}
        />
        <button
          class="btn btn-dark"
          onClick={() => {
            genUsers();
          }}
        >
          Generate
        </button>
      </div>

      {users.map((x) => (
        <UserCard
          name={x.name}
          email={x.email}
          imgLink={x.imgLink}
          location={x.location}
        ></UserCard>
      ))}

      {/* made by section */}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Wuttipat Sanchai 640610668
      </p>
    </div>
  );
}
