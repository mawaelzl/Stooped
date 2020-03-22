const getNumberOfBars = async (): Promise<number> => {
  const response = await fetch("/numberOfBars");
  return parseInt(await response.text());
};

const increment = async (): Promise<number> => {
  const response = await fetch("/numberOfBars/inc");
  return parseInt(await response.text());
};

const decrement = async (): Promise<number> => {
  const response = await fetch("/numberOfBars/dec");
  return parseInt(await response.text());
};

const Api = {
  getNumberOfBars,
  increment,
  decrement
};

export default Api;
