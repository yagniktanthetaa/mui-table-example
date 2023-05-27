import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material";

const createNewData = (
  Actions,
  StationName,
  Visibility,
  State,
  City,
  ZIP,
  CHargeBoxID,
  Notes
) => {
  return {
    Actions,
    StationName,
    Visibility,
    State,
    City,
    ZIP,
    CHargeBoxID,
    Notes,
  };
};

const tableHeader = [
  "Actions",
  "Station Name",
  "Visibility",
  "State",
  "City",
  "ZIP",
  "Charge Box ID",
  "Notes",
];

const rows = [
  createNewData(
    "delete",
    "170 Robert Speck Pkwy., ON",
    "PUBLIC",
    "ON",
    "Mississauga",
    "L4Z 3G1",
    "LiteON_RobSpeck2",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maxi..."
  ),
  createNewData(
    "delete",
    "170 Robert Speck Pkwy., ON",
    "PUBLIC",
    "ON",
    "Mississauga",
    "L4Z 3G1",
    "LiteON_RobSpeck2",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maxi..."
  ),
  createNewData(
    "edit",
    "170 Robert Speck Pkwy., ON",
    "PUBLIC",
    "ON",
    "Mississauga",
    "L4Z 3G1",
    "LiteON_RobSpeck2",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maxi..."
  ),
  createNewData(
    "delete",
    "170 Robert Speck Pkwy., ON",
    "PUBLIC",
    "ON",
    "Mississauga",
    "L4Z 3G1",
    "LiteON_RobSpeck2",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maxi..."
  ),
  createNewData(
    "edit",
    "170 Robert Speck Pkwy., ON",
    "PUBLIC",
    "ON",
    "Mississauga",
    "L4Z 3G1",
    "LiteON_RobSpeck2",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maxi..."
  ),
];

const StyledTableCell = styled(TableCell)({
  padding: "30px",
});

const StyledTableRow = styled(TableRow)({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f0f2f5",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
});

const MuiTableDemo = () => {
  return (
    <>
      <div className="sider-background">
        <TableContainer>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead className="tableHead">
              <TableRow>
                {tableHeader.map((tablehead, i) => (
                  <StyledTableCell
                    className="table-cell-classes-border"
                    key={i}
                    align="center"
                  >
                    {tablehead}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <StyledTableRow className="table-cell-classes-border" key={i}>
                  <StyledTableCell
                    className="table-cell-classes-border"
                    align="center"
                  >
                    {row.Actions}
                  </StyledTableCell>
                  <StyledTableCell
                    className="table-cell-classes-border"
                    component="th"
                    scope="row"
                  >
                    {row.StationName}
                  </StyledTableCell>
                  <StyledTableCell
                    className="table-cell-classes-border"
                    align="center"
                  >
                    {row.Visibility}
                  </StyledTableCell>
                  <StyledTableCell
                    className="table-cell-classes-border"
                    align="center"
                  >
                    {row.State}
                  </StyledTableCell>
                  <StyledTableCell
                    className="table-cell-classes-border"
                    align="center"
                  >
                    {row.City}
                  </StyledTableCell>
                  <StyledTableCell
                    className="table-cell-classes-border"
                    align="center"
                  >
                    {row.ZIP}
                  </StyledTableCell>
                  <StyledTableCell
                    className="table-cell-classes-border"
                    align="center"
                  >
                    {row.CHargeBoxID}
                  </StyledTableCell>
                  <StyledTableCell
                    className="table-cell-classes-border"
                    align="center"
                  >
                    {row.Notes}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default MuiTableDemo;
