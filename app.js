const express = require('express'); 
const port = 3000; 
app.get('/', (req, res) => { 
  res.send('hola soy el profesor'); 
}) 

app.listen(port, () => { 
  console.log(`Example app listening at http://localhost:${port}`); 
}) 