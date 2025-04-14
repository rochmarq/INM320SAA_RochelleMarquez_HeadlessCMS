async function getRecords(data) {
    const fetchedData = await fetch('data/data.json');
    const result = await fetchedData.json();
    console.log('result: ', result);

    // const demoGrab = document.querySelector('#demo')

    // result.card.forEach(item => {
    //     // console.log('inside foreach: ', item);
        
    // });
    document.getElementById("unresolved").textContent = result.unresolved;
    document.getElementById("overdue").textContent = result.overdue;
    document.getElementById("open").textContent = result.open;
    document.getElementById("hold").textContent = result.hold;
}

getRecords();





// var obj = JSON.parse(data);
// document.getElementById("demo").innerHTML = 
//     obj.cards[1].overdue;


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



// var text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// var obj = JSON.parse(data);

// document.getElementById("demo").innerHTML =
//     obj.employees[1].firstName + " " + obj.employees[1].lastName;