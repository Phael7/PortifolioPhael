let gastosSemana = [];
const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

document.getElementById('formGastos').addEventListener('submit', function(event) {
  event.preventDefault();

  const diaSemana = document.getElementById('diaSemana').value;
  const valorGasto = parseFloat(document.getElementById('valorGasto').value);

  gastosSemana.push({ dia: diaSemana, valor: valorGasto });

  const tabelaCompras = document.getElementById('tbodyCompras');

  // Limpa a tabela antes de adicionar as novas linhas
  tabelaCompras.innerHTML = '';

  // Adiciona as linhas da tabela com base nos dados do array gastosSemana
  gastosSemana.forEach((gasto) => {
    const newRow = tabelaCompras.insertRow();
    const cellDia = newRow.insertCell(0);
    const cellValor = newRow.insertCell(1);

    cellDia.textContent = gasto.dia;
    cellValor.textContent = `R$ ${gasto.valor.toFixed(2)}`;
  });

  const totalGastos = gastosSemana.reduce((acc, cur) => acc + cur.valor, 0);
  const mediaDiaria = (totalGastos / gastosSemana.length).toFixed(2);

  document.getElementById('mensagemTotal').textContent = `No total, você gastou R$ ${totalGastos.toFixed(2)} ao longo da semana.`;
  document.getElementById('mensagemMedia').textContent = `Sua média diária de gastos foi de R$ ${mediaDiaria}.`;
});