import React from "react";
import { Size } from "../_types/types";

export default function Spacer({
  size,
  className = "",
}: {
  size: Size;
  className?: string;
}) {
  const sizeStyle = {
    0: "my-0",
    0.5: "my-0.5",
    1: "my-1",
    1.5: "my-1.5",
    2: "my-2",
    2.5: "my-2.5",
    3: "my-3",
    3.5: "my-3.5",
    4: "my-4",
    5: "my-5",
    6: "my-6",
    7: "my-7",
    8: "my-8",
    9: "my-9",
    10: "my-10",
    11: "my-11",
    12: "my-12",
    14: "my-14",
    16: "my-16",
    20: "my-20",
    24: "my-24",
    28: "my-28",
    32: "my-32",
    36: "my-36",
    40: "my-40",
    44: "my-44",
    48: "my-48",
    52: "my-52",
    56: "my-56",
    60: "my-60",
    64: "my-64",
    72: "my-72",
    80: "my-80",
    96: "my-96",
  };

  return <div className={`${sizeStyle[size]} ${className}`} />;
}
