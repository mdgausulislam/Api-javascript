console.log("country");

const loadCountries=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayUser(data))
}

const displayUser=(data)=>{
    const countriesContainer=document.getElementById('all-countries');
    // for (const country of data) {
    //     console.log(country)
    // }

    data.forEach(country => {
        console.log(country.name.common);

        const divCountry=document.createElement('div');
        divCountry.classList.add('country');
        divCountry.innerHTML=`
        <h3>Name: ${country.name.common} </h3>
        <p>Capital: ${country.capital ? country.capital[0] :'no capital' }</p>`
        countriesContainer.appendChild(divCountry)
    });

    console.log(data);
}

loadCountries();