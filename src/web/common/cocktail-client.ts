import axios from 'axios';

// console.log(import.meta.env.VITE_COCKTAIL_API_URL)
const baseURL = import.meta.env.VITE_COCKTAIL_API_URL;

export const CocktailClient = axios.create({
  baseURL,
  // timeout: 1000,
  // headers: {
  //     //   'Accept': 'application/vnd.GitHub.v3+json',
  //     //'Authorization': 'token <your-token-here> -- https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
  // }
});
