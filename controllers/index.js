const getNames = (request, response) => {
  console.log(request);
  response.json(['Barack Obama', 'Joe Momma', 'Jackson Chan']);
};

const hello = (request, response) => {
  response.send('Hello world!');
};

module.exports = { getNames, hello };
