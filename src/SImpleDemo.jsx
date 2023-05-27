import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// eslint-disable-next-line
import Paper from "@material-ui/core/Paper";
import { makeStyles, styled } from "@material-ui/core/styles";

export const createData = (number, item, qty, price) => {
  return { number, item, qty, price };
};

const useStyles = makeStyles({
  table: {
    width: "100%",
    margin: "auto",
  },
  finalRow: {
    backgroundColor: "lightblue",
  },
  tableHead: {
    borderTop: "2px solid #11BF1F",
    borderBottom: "2px solid #11BF1F",
  },
});

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "rgba(255, 255, 255, 1e-05)",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    borderColor: "rgba(0, 0, 0, 0.06)",
  },
}));

const SImpleDemo = () => {
  const classes = useStyles();

  const rows = [
    createData(1, "Apple", 5, 3),
    createData(2, "Orange", 2, 2),
    createData(3, "Grapes", 3, 1),
    createData(4, "Tomato", 2, 1.6),
    createData(5, "Mango", 1.5, 4),
  ];
  return (
    <>
      <div className="sider-background">
        <div>
          <TableContainer
            component={Paper}
            className={`${classes.table} sider-background`}
          >
            <Table
              aria-label="simple table"
              className={`${classes.table} sider-background`}
            >
              <TableHead className={classes.tableHead}>
                <TableRow>
                  <TableCell>S.No</TableCell>
                  <TableCell align="right">Item</TableCell>
                  <TableCell align="right">Quantity&nbsp;(kg)</TableCell>
                  <TableCell align="right">Price&nbsp;($)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.number}>
                    <TableCell component="th" scope="row">
                      {row.number}
                    </TableCell>
                    <TableCell align="right">{row.item}</TableCell>
                    <TableCell align="right">{row.qty}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default SImpleDemo;
