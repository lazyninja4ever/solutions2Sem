const jsonBtn = document.getElementById('carBtn');
const xmlBtn = document.getElementById('carBtn2');
const outputEl = document.getElementById('outputDiv');

jsonBtn.addEventListener('click', function(){
    fetch("/cars/getJSON")
    .then(response => response.text())
    .then((str) => {
        console.log(str);
        let carData = JSON.parse(str);
        let car = carData.cars[0];
        let container = document.createElement('ul');
        let content = `
            <li>Brand: ${car.brand}</li>
            <li>Model: ${car.model} </li>
            <li>Licene number: ${car.regNbr} </li>
            <li>Drive: ${car.drive} </li>
            <li>Doors: ${car.doors} </li>
            <li> Tyres: </li>
                <ul>
                    <li> Model: ${car.tyres.type} </li>
                    <li> Model: ${car.tyres.brand} </li>
                    <li> Model: ${car.tyres.diameter} ${car.tyres.diameter_unit}</li>
                    <li> Model: ${car.tyres.pressure} ${car.tyres.pressure_unit}</li>
                </ul>
            `
        container.innerHTML = content;
        outputEl.append(container)

    });
});

xmlBtn.addEventListener('click', function(){
    fetch("/cars/getXML")
    .then(response => response.text())
    .then((str) => {
        let carData = JSON.parse(str);
        let carD = carData.cars.car;

        let container = document.createElement('ul');
        let content = `
            <li>Brand: ${carD.brand}</li>
            <li>Model: ${carD.model} </li>
            <li>Licene number: ${carD.regNbr} </li>
            <li>Drive: ${carD.drive} </li>
            <li>Doors: ${carD.doors} </li>
            <li> Tyres: </li>
                <ul>
                    <li> Model: ${carD.tyres.type} </li>
                    <li> Model: ${carD.tyres.brand} </li>
                    <li> Model: ${carD.tyres.diameter._} ${carD.tyres.diameter.attr_.unit}</li>
                    <li> Model: ${carD.tyres.pressure._} ${carD.tyres.pressure.attr_.unit}</li>
                </ul>
            `
        container.innerHTML = content;
        outputEl.append(container)
        
    });
});


/*
button(id="carBtn") Get json
  button(id="carBtn2") Get XML
  div(id="outputDiv")
*/ 