import { Country } from "../../interfaces/country.interface";

export class DataController {
  API: string = 'https://restcountries.com/v3.1/all?limit=10';

  public getAllCountries = async () :Promise<Country[]>=> {
    try {
      let response = await fetch(this.API);
      let responseData = await response.json();
      console.log('Data a mapear : ', responseData);
      return responseData;
    } catch (error) {
      console.log(error);
    }
  };
}
