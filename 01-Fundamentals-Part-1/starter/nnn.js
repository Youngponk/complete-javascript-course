// 1 bitcoin --> 100000000 satoshis

let pesoChileno = 1000;
const dolarLocal = 0.0010;
const bitcoin = 0.000013;

function calcularDolares(pesoChileno) {
  return pesoChileno * dolarLocal;
}

function CryptoConverter(pesoChileno, dolarLocal, bitcoin) {
  let cambio = calcularDolares(pesoChileno, dolarLocal);
  const bitChange = cambio * bitcoin;
  const sathosiChange = (bitChange * 100000000);

  console.log(`Resumen: 
    Dinero ingresado: $${pesoChileno}CLP
    Bitcoins: ${bitChange}
    Satoshis: ${sathosiChange}
    `);
}

CryptoConverter(pesoChileno, dolarLocal, bitcoin);
