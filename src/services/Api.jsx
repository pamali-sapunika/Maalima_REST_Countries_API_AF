import axios from "axios";

const BASE_URL = 'https://restcountries.com/v3.1';

//Get ALL countries
export const getAllCountries = () => axios.get(`${BASE_URL}/all`);

//Search country by NAME
export const searchCountryByName = (name) => axios.get(`${BASE_URL}/name/${name}`);

//Filter by REGION
export const filterByRegion = (region) => axios.get(`${BASE_URL}/region/${region}`);

//Filter by LANGUAGE
export const filterByLanguage = (language) =>axios.get(`${BASE_URL}/lang/${language}`);

//Get full details by COUNTRY CODE
export const getCountryByCode = (code) => axios.get(`${BASE_URL}/alpha/${code}`);