async function getRecords(data) {
    const fetchedData = await fetch('data/data.json');
    const result = await fetchedData.json();
    console.log('result: ', result);

    // const heading = document.getElementById("demo")
}

getRecords();



// async function getData() {
//     const response = await fetch('/assets/data/data.json');
//     const data = await response.json();
//     console.log(data);
//     }
//     getData();

// var obj = JSON.parse(data);

// document.getElementById("demo").innerHTML =
//     obj.overview[1].overdue;


// fetch('data.json')
//     .then(response => response.json())
//     .then(data => console.log(data));


// import data from './data.json';
// console.log(data);

// var obj = JSON.parse(data);

// document.getElementById("demo").innerHTML =
//     obj.employees[1].firstName + " " + obj.employees[1].lastName;