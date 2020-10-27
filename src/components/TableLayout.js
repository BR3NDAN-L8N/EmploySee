import React from 'react';

// MATERIAL-UI imports
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

// CUSTOM FILES import
import SortTable from './TableSort';

const TableLayout = (props) => {

    // const { sortBy, isReverse } = props;

    const rowsArray = (props) => {
        return SortTable(props);
    }

        return (
            <TableBody>
                {rowsArray(props).map((row) => (
                    <TableRow key={row.email}>
                        <TableCell component="th" scope="row">
                            {row.firstName}
                        </TableCell>
                        <TableCell align="right">{row.lastName}</TableCell>
                        <TableCell align="right">{row.title}</TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right">{row.teamNumber}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        );

};

export default TableLayout;
