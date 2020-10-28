const sortTable = (props) => {

    console.log('props in tableSort === ', props);

    const sortRows = (rowArray, sortBy, isReverse) => {

        let newArray;

        if (sortBy === "teamNumber") {
            const teamOne = rowArray.filter(row => row[sortBy] === 1);
            const teamTwo = rowArray.filter(row => row[sortBy] === 2);
            const sortedTeamOne = sortRows(teamOne, "firstName");
            console.log(sortedTeamOne);
            const sortedTeamTwo = sortRows(teamTwo, "firstName");
            console.log(sortedTeamTwo);
            newArray = sortedTeamOne;
            sortedTeamTwo.forEach(element => {
                newArray.push(element);
            });
            console.log(newArray);
        } else {
            newArray = rowArray.sort((a, b) => a[sortBy].localeCompare(b[sortBy], 'en', { 'sensitivity': 'base' }));
        }

        if (isReverse) {
            newArray = newArray.reverse();
        }
        return newArray;
    };

    return sortRows(props.rows, props.sortBy, props.isReverse)

}

export default sortTable;