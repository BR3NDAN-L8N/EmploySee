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

export default class RenderTable extends React.Component {
    state = {
        firstNameButton: "down",
        lastNameButton: "down",
        titleButton: "down",
        teamNumberButton: "up",
        tableSortBy: "teamNumber",
        isReverse: false
    }

    arrowChange = (event) => {
        // event.stopPropagation();
        // event.preventDefault();
        this.state.tableSortBy = `${event.target.id}`;
        console.log('table sort by === ', this.state.tableSortBy);
        const name = `${event.target.id}Button`;
        const direction = this.state[`${event.target.id}Button`];
        const key = 0;
        const value = 1;

        let stateArray = Object.entries(this.state);
        console.log(stateArray);

        stateArray.forEach(keyValuePair => {
            // turn all arrows down
            if (keyValuePair[value] === "up") {
                console.log(keyValuePair);
                this.setState({
                    [keyValuePair[key]]: "down"
                });
            }
        });

        //  change the arrow of the button clicked
        if (direction === "down") {
            console.log(`the state of "${this.state.tableSortBy}'s" direction is "${direction}"`);
            this.setState({
                [name]: "up",
                isReverse: true
            });
        } else if (direction === "up") {
            console.log(`the state of "${this.state.tableSortBy}'s" direction is "${direction}"`);
            this.setState({
                [name]: "down",
                isReverse: false
            });
        } else {
            console.log(`problem with direction's var value ... this "${this.state.tableSortBy}" has a value of "${direction}"`);
        }
        
        return event.target.arrowDirection = this.state[this.state.tableSortBy];

    }

    render() {
        return (
            <div>
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
                        />

                    </Table>
                </TableContainer>
            </div>
        );
    }
};