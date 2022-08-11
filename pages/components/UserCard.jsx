import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import React, { useState } from "react";
import UserCardDetail from "./UserCardDetail";

export default function UserCard(props) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div class="border-bottom">
      <div class="d-flex align-items-center p-3" onClick={() => {isClicked ? setIsClicked(false) : setIsClicked(true)}}>
        <img src={props.imgLink} width="90px" class="rounded-circle me-4"></img>
        <span class="text-center display-6 me-auto">{props.name}</span>
        {isClicked ? <IconChevronUp/> : <IconChevronDown/>}
      </div>
      {isClicked ? <UserCardDetail email={props.email} location={props.location}></UserCardDetail> : "" }
    </div>
  );
}
