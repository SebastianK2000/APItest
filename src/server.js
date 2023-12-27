const express = require('express');
const app = express();

// ...

// Obsługa zapytania GET pod ścieżką /config
app.get('/config', (req, res) => {
  // Obsługa zapytania, zwróć plik, itp.
});

// ...

// Nasłuchuj na porcie 8080
app.listen(8080, () => {
  console.log('Serwer nasłuchuje na porcie 8080');
});
