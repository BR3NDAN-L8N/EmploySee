import React from 'react';

// MATERIAL-UI imports
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// CUSTOM FILES import
import TableLayout from './TableLayout';
import RenderSortButton from './TableSortButtonRender';
import data from "./data.json";

export default class RenderTable extends React.Component {
    state = {
        firstNameButton: "up",
        lastNameButton: "up",
        titleButton: "up",
        teamNumberButton: "down",
        filterBy: "",
        tableSortBy: "teamNumber",
        isReverse: false,
        rows: data,
    };

    stateArray = () => {
        //  Convert the React state into an array
        let stateArray = Object.entries(this.state);
        return stateArray;
    };

    handleFilterInput = (event) => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;


        // Updating the input's state
        this.setState({
            filterBy: value
        });
    };

    filterRows = () => {
        // let newRows;
        if (this.state.filterBy !== "") {
            this.setState({
                rows: this.state.rows.filter(row => row.title === this.state.filterBy)
            });
        }
    }

    refreshRows = () => {
        this.setState({
            rows: data
        });
    };

    arrowChange = (event) => {
        this.state.tableSortBy = event.target.id;
        const name = `${event.target.id}Button`;
        const direction = this.state[`${event.target.id}Button`];
        const key = 0;
        const value = 1;

        // turn all arrows up for a default position
        this.stateArray().forEach(keyValuePair => {
            if (keyValuePair[value] === "down") {
                this.setState({
                    [keyValuePair[key]]: "up"
                });
            }
        });

        //  change the arrow of the button clicked
        if (direction === "down") {
            this.setState({
                [name]: "up",
                isReverse: true
            });
        } else if (direction === "up") {
            this.setState({
                [name]: "down",
                isReverse: false
            });
        } else {
            console.log(`problem with direction's var value ... this "${this.state.tableSortBy}" has a value of "${direction}"`);
        }

        return event.target.arrowDirection = this.state[this.state.tableSortBy];

    }

    handleRows = () => {
        // return this.state.filterBy !== "" ? this.state.rows : this.state.filteredRows;
        return this.state.rows;
    }

    render() {
        return (
            <div>
                <input
                    placeholder={"Filter by job title"}
                    value={this.state.filterBy}
                    onChange={this.handleFilterInput}
                ></input>
                <button
                    type={'button'}
                    onClick={this.filterRows}
                >Filter</button>
                <button
                    type={'button'}
                    onClick={this.refreshRows}
                >Refresh</button>
                <TableContainer component={Paper}>
                    <Table aria-label="employee table">
                        <TableHead>
                            <TableRow>
                                <TableCell>First Name<RenderSortButton
                                    id={"firstName"}
                                    arrowDirection={this.state.firstNameButton}
                                    handleArrowChange={this.arrowChange}
                                />
                                </TableCell>
                                <TableCell align="right">Last Name<RenderSortButton
                                    id={"lastName"}
                                    arrowDirection={this.state.lastNameButton}
                                    handleArrowChange={this.arrowChange}
                                />
                                </TableCell>
                                <TableCell align="right">Title<RenderSortButton
                                    id={"title"}
                                    arrowDirection={this.state.titleButton}
                                    handleArrowChange={this.arrowChange}
                                />
                                </TableCell>
                                <TableCell align="right">Email
                                </TableCell>
                                <TableCell align="right">Team Number<RenderSortButton
                                    id={"teamNumber"}
                                    arrowDirection={this.state.teamNumberButton}
                                    handleArrowChange={this.arrowChange}
                                />
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableLayout
                            sortBy={this.state.tableSortBy}
                            isReverse={this.state.isReverse}
                            rows={this.state.rows}
                        />

                    </Table>
                </TableContainer>
            </div>
        );
    }
};