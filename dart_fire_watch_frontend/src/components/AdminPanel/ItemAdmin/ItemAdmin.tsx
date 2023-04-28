import React from 'react'

interface Column {
  id: "avatar" | "name" | "cost" | "skill";
  label: string;
  align?: "right" | "center" | "left" | "inherit" | "justify" | undefined;
  format?: (value: number) => string;
}
const columns: readonly Column[] = [
  { id: "avatar", label: "Avatar", align: "center" },
  { id: "name", label: "Name", align: "center" },
  {
    id: "cost",
    label: "Cost",
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "skill",
    label: "Skill",
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
];

interface IItemData {
  _id: string;
  avatar: string;
  name: string;
  cost: number;
  skill: string;
}

export const ItemAdmin = () => {

  return (
    <div>ItemAdmin</div>
  )
}
