import {
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
interface Column {
  id: "avatar" | "name" | "cost" | "skill";
  label: string;
  minWidth?: number;
  align?: "right" | "center" | "left" | "inherit" | "justify" | undefined;
  format?: (value: number) => string;
}
const columns: readonly Column[] = [
  { id: "avatar", label: "Avatar", align: "center", minWidth: 170 },
  { id: "name", label: "Name", align: "center", minWidth: 100 },
  {
    id: "cost",
    label: "Cost",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "skill",
    label: "Skill",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
];

interface ChampionData {
  avatar: string;
  name: string;
  cost: number;
  skill: string;
}

const tableCellSx = {
  color: "white",
  fontWeight: 300,
};

export const ChampionAdmin = () => {
  const [allChampions, setAllChampions] = useState([
    {
      avatar: "https://cdn.metatft.com/file/metatft/champions/tft8_syndra.png",
      name: "Syndra",
      cost: 5,
      skill: "hello",
    },
    {
      avatar: "https://cdn.metatft.com/file/metatft/champions/tft8_syndra.png",
      name: "Syndra",
      cost: 5,
      skill: "hello",
    },
  ]);

  return (
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="customized table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
                sx={{ bgcolor: "#000", ...tableCellSx}  }
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {allChampions.map((champion: ChampionData, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">
                <img src={champion.avatar} width={50} height={50} />
              </TableCell>
              <TableCell align="center" sx={tableCellSx}>
                {champion.name}
              </TableCell>
              <TableCell align="center" sx={tableCellSx}>
                {champion.cost}
              </TableCell>
              <TableCell align="center" sx={tableCellSx}>
                {champion.skill}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
