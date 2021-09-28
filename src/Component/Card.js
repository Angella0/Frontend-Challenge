


function Earlier(){

    let sortedProjects = data.sort((a, b) => Date.parse(new Date(a.creationDate.split("/").reverse().join("-"))) - Date.parse(new Date(b.initialRegistration.split("/").reverse().join("-"))));
    console.log(sortedProjects);
};




export default Earlier();