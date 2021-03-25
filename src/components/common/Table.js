import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
export default Table = (props) => {
  const { columns, dataSource } = props;

  return (
    <Table>
      <TableHead>
        {columns.map((val, index) => (
          <TableCell key={`${val}-${index}`} align={index === 0 ? "left" : "right"}>{val}</TableCell>
        ))}
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Dessert (100g serving)</TableCell>
          <TableCell align="right">Calories</TableCell>
          <TableCell align="right">Fat&nbsp;(g)</TableCell>
          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          <TableCell align="right">Protein&nbsp;(g)</TableCell>
        </TableRow>
        {
            dataSource.map((data,index)=>(
                <TableRow key={index}>
                    {
                        
                    }
                </TableRow>
            ))
        }
      </TableBody>
    </Table>
  );
};

Table.propTypes = {
  columns: PropTypes.array,
  dataSource: PropTypes.array,
};

Table.defaultProps = {
  columns: [],
  dataSource: [],
};
// data source

/**
 * 
 * columns: [column1,column2,....],
 * 
 * columnData:[
 * [
 * column1: "data",
 * column2: "data"
 * ...
 * column(n): "data"
 * ],.....
 * ]
 * 
 *
 */
