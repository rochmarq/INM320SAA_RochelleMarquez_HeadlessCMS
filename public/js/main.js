async function getRecords(data) {
    const fetchedData = await fetch('data/data.json');
    const result = await fetchedData.json();
    // check console
    console.log('result: ', result);

    // put the text in the file
    document.getElementById("unresolved").textContent = result.unresolved;
    document.getElementById("overdue").textContent = result.overdue;
    document.getElementById("open").textContent = result.open;
    document.getElementById("hold").textContent = result.hold;
}

getRecords();