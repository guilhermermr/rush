interface Produto {
  nome: string;
  preco: number;
  categoria?: string;
}

function mostrarProduto(p: Produto) {
  return `Produto: ${p.nome}, Preço: R$${p.preco.toFixed(2)}`;
}

console.log(mostrarProduto({ nome: "Airfryer", preco: 200 }));
