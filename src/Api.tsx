const getNumberOfBars = async (): Promise<number> => {
  const response = await fetch("https://stooped-api.herokuapp.com/numberOfBars");
  return parseInt(await response.text());
};

const increment = async (): Promise<number> => {
  const response = await fetch("https://stooped-api.herokuapp.com/numberOfBars/inc");
  return parseInt(await response.text());
};

const decrement = async (): Promise<number> => {
  const response = await fetch("https://stooped-api.herokuapp.com/numberOfBars/dec");
  return parseInt(await response.text());
};

const Api = {
  getNumberOfBars,
  increment,
  decrement
};

export default Api;
