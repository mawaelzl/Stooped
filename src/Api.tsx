const getNumberOfBars = async (): Promise<number> => {
  const response = await fetch("http://nodejs-stooped-api-bhbp-8080-app-stooped-api.apps.us-east-1.starter.openshift-online.com/numberOfBars");
  return parseInt(await response.text());
};

const increment = async (): Promise<number> => {
  const response = await fetch("http://nodejs-stooped-api-bhbp-8080-app-stooped-api.apps.us-east-1.starter.openshift-online.com/numberOfBars/inc");
  return parseInt(await response.text());
};

const decrement = async (): Promise<number> => {
  const response = await fetch("http://nodejs-stooped-api-bhbp-8080-app-stooped-api.apps.us-east-1.starter.openshift-online.com/numberOfBars/dec");
  return parseInt(await response.text());
};

const Api = {
  getNumberOfBars,
  increment,
  decrement
};

export default Api;
