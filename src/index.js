var person = React.createElement('h3', {}, 'Karla Buckner');
var user = React.createElement('p', {}, '@Karlambuckner');
var app = React.createElement('div', {}, person, user);

ReactDOM.render(
  app,
  document.getElementById('react-app-root')
);