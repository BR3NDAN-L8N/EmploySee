import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(firstName, lastName, title, email, teamNumber) {
    return { firstName, lastName, title, email, teamNumber };
}

const rows = [
    createData('Ben', 'Dover', 'Junior Dev', 'bdover@fake-comp.com', 1),
    createData('Mike', 'Rotchburns', 'Senior Dev', 'mrotchburns@fake-comp.com', 1),
    createData('Ila', 'Vainal', 'Quality Assurance', 'ivainal@fake-comp.com', 1),
    createData('Ivana', 'Tinkle', 'Tech Lead', 'itinkle@fake-comp.com', 1),
    createData('Lee', 'Keyrear', 'Junior Dev', 'lkeyrear@fake-comp.com', 2),
    createData('Harry', 'Azcrac', 'Senior Dev', 'hazcrac@fake-comp.com', 2),
    createData('Anita', 'Bath', 'Quality Assurance', 'abath@fake-comp.com', 2),
    createData('Jobe', 'Low', 'Tech Lead', 'jlow@fake-comp.com', 2),
];

const newSort = "";
const lastSorted = "";

// By extending the React.Component class, Counter inherits functionality from it
class SortButton extends React.Component {


    // Setting the initial state of the component to watch for
    state = {
        TableBody
    };

    createButton = () => {

        return (
            <button>
                <ExpandMoreSharpIcon />
            </button>
        )
    };

    sortBy = (sortType) => {
        switch (sortType) {
            case "firstName":
                rows[0].sort();
                break;

            default:
                break;
        }
    };

    sortRows = (sortType, isSwitch) => {
        if (isSwitch) {
            this.sortBy(sortType).reverse();
        } else {
            this.sortBy(sortType);
        }
    };

    determineSort = () => {
        if (this.newSort === this.lastSorted) {
            this.sortRows(newSort, "switch");
        } else {
            this.sortRows(newSort);
        }
    };

    render() {
        return (
            <button>
                <ExpandMoreSharpIcon />
            </button>
        )
    }

}

export default function BasicTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="employee table">
                <TableHead>
                    <TableRow>
                        <TableCell>First Name<SortButton /></TableCell>
                        <TableCell align="right">Last Name</TableCell>
                        <TableCell align="right">Title</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Team Number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
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
            </Table>
        </TableContainer>
    );
}
