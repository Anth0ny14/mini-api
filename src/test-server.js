const app = require('./app');
const server = app.listen(3000, () => {
  console.log('Servidor de pruebas ejecutándose en http://localhost:3000');

  // Espera 1 segundo y luego ejecuta Newman desde Node
  setTimeout(() => {
    const { exec } = require('child_process');
    exec('npx newman run postman/suma_collection.json', (error, stdout, stderr) => {
      console.log(stdout);
      if (error) {
        console.error(stderr);
        process.exit(1);
      }
      server.close(() => {
        console.log('Servidor de pruebas cerrado.');
        process.exit(0);
      });
    });
  }, 1000);
});
