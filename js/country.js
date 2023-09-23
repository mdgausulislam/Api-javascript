console.log("country");

const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayUser(data))
}

const displayUser = (data) => {
    const countriesContainer = document.getElementById('all-countries');
    // for (const country of data) {
    //     console.log(country)
    // }

    data.forEach(country => {
        // console.log(country.name.common);

        const divCountry = document.createElement('div');
        divCountry.classList.add('country');
        divCountry.innerHTML = `
        <h3>Name: ${country.name.common} </h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'no capital'}</p>
        <button onclick="displayCountryDetails('${country.cca2}')">Details</button>`
        countriesContainer.appendChild(divCountry)
    });

    // console.log(data);
}


const displayCountryDetails = code => {

    const url=`https://restcountries.com/v3.1/alpha/${code}`;
    // console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>showCountryDetails(data[0]))
}

const showCountryDetails=country=>{
    const detailContainer=document.getElementById('country-details');
    detailContainer.innerHTML=`
    <h2>Country Detail</h2>
    <h3>Name: ${country.name.common} </h3>
    <p>Capital: </p>
    <img src="${country.flags.png}" alt="">`
}

loadCountries();