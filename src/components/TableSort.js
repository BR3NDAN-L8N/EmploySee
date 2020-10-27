// import React from "react";

const sortTable = (props) => {

    console.log('props in tableSort === ', props);

    // const { sortBy, isReverse } = props;

    const createData = (firstName, lastName, title, email, teamNumber) => {
        return { firstName, lastName, title, email, teamNumber };
    };

    const rows = [
        createData('Ben', 'Dover', 'Junior Dev', 'bdover@fake-comp.com', 1),
        createData('Mike', 'Rotchburns', 'Senior Dev', 'mrotchburns@fake-comp.com', 1),
        createData('Ila', 'Vainal', 'Quality Assurance', 'ivainal@fake-comp.com', 1),
        createData('Mike', 'Hawk', 'Tech Lead', 'mhawk@fake-comp.com', 1),
        createData('Lee', 'Keyrear', 'Junior Dev', 'lkeyrear@fake-comp.com', 2),
        createData('Harry', 'Azcrac', 'Senior Dev', 'hazcrac@fake-comp.com', 2),
        createData('Mia', 'Rection', 'Quality Assurance', 'mrection@fake-comp.com', 2),
        createData('Dixie', 'Normous', 'Tech Lead', 'dnormous@fake-comp.com', 2),
    ];

    const sortRows = (sortBy, isReverse) => {

        let newArray;

        if (sortBy === "teamNumber") {
            newArray = rows;
        } else {
            newArray = rows.sort((a, b) => a[sortBy].localeCompare(b[sortBy], 'en', { 'sensitivity': 'base' }));
        }

        if (isReverse) {
            newArray = newArray.reverse();
        }
        return newArray;
    };

    return sortRows(props.sortBy, props.isReverse)

}

export default sortTable;