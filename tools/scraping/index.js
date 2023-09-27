const puppeteer = require('puppeteer');

// Función autoejecutable
(async () => {
  console.log('Lanzamos navegador!');
  // const browser = await puppeteer.launch();

  /*
    {headless: false} lo que hace es que el navegador
    no se lance en segundo plano.
  */
  const browser = await puppeteer.launch({ headless: false});

  // Abrir una página en el navegador
  const page = await browser.newPage();

  // Ir a una página
  await page.goto('https://es.wikipedia.org/wiki/Node.js');

  /*
    Ejecutar un script, con page.evaluate, lo que hace es evaluar 
    lo que le digamos dentro de la pagina y devolver el resultado
  */
  var titulo1 = await page.evaluate(() =>{
    const h1 = document.querySelector('h1');
    console.log(h1.innerText);
    return h1.innerText;
  });

  console.log(titulo1);

  console.log('Cerramos navegador...');

  // Usamos browser.close para cerrar el navegador despues de haber extraido los datos
  browser.close();
  
  console.log('Navegador cerrado');
})();

/*
  De esta forma puedo acceder a una página y obtener toda su información y
  almacenarla en una base de datos.
*/