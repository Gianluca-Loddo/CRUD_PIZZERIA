const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});





const PIZZA = [
  { id: 1, name: 'Margherita', ingredients: ['tomato', 'mozzarella', 'basil'] },
  { id: 2, name: 'Pepperoni', ingredients: ['tomato', 'mozzarella', 'pepperoni'] },
  { id: 3, name: 'Hawaiian', ingredients: ['tomato', 'mozzarella', 'ham', 'pineapple'] }
];


// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to the Pizzeria API');
});




// Additional routes for CRUD operations would go here

// (index)
//è stato aggiunto API per differenziare le rotte delle pagine web da quelle delle API (non visibili all'utente, ma usate per lo scambio di dati tra client e server)
//API NON E' UNA CARTELLA, MA UN PREFISSO NELLA ROUTE
app.get('/api/pizzas', (req, res) => {
  // Logic to retrieve all pizzas from the database
  res.send('Lista delle pizze');
});

// (Show)
app.get('/api/pizzas/:id', (req, res) => {
  // Logic to retrieve a single pizza by ID
  res.send('Dettagli della pizza con ID: ' + req.params.id);
});

// (Create)
app.post('/api/pizzas', (req, res) => {
  // Logic to add the new pizza to the database
  res.send('Pizza creata');
});

// (Update)
app.put('/api/pizzas/:id', (req, res) => {
  // Logic to update the pizza in the database
  res.send('Pizza con ID ' + req.params.id + ' aggiornata');
});

// (Modify)
app.patch('/api/pizzas/:id', (req, res) => {
  // Logic to modify the pizza in the database
  res.send('Pizza con ID ' + req.params.id + ' modificata');
});

// (Destroy)
app.delete('/api/pizzas/:id', (req, res) => {
  // Logic to delete the pizza from the database
  res.send('Pizza con ID ' + req.params.id + ' eliminata');
});
