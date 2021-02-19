const profileDataArgs = process.argv.slice(2, process.argv.length);


const printProfiledata = profileDataArr => {
    profileDataArr.forEach((profileItem) => console.log(profileItem));
};

printProfiledata(profileDataArgs);