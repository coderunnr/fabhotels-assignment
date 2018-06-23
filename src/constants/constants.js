import countryListJson from './countryList.json';

export const countryList = Object.keys(countryListJson).map((key) => {
  return countryListJson[key];
});