import React from "react";

function CountryCard({ country }) {

  return (
    
    <div className="card mb-3">
      <div className="card-body">
          <h5 className="card-title">{country.name.common}</h5>
          <p className="card-text">Capital: {country.capital ? country.capital[0] : "N/A"}</p>
          <p className="card-text">Region: {country.region}</p>
          <p className="card-text">Population: {country.population.toLocaleString()}</p>
      </div>
    </div>

  );
}

export default CountryCard;
