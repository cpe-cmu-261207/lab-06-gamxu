import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import React from "react";

export default function UserCardDetail(props) {
  return (
    <div class="text-center">
      <p>
        <IconMailForward /> {props.email}
      </p>
      <p>
        <IconMapPins /> {props.location}
      </p>
    </div>
  );
}
