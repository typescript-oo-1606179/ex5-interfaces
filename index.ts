function newSection(section: string) {
  console.log("======================================");
  console.log(section);
  console.log("======================================");
}

newSection("Criação de interfaces");

interface IPessoa {
  readonly id: number;
  nome: string;
  idade: number;
  email?: string;
}

type PessoaComType = {
  readonly id: number;
  nome: string;
  idade: number;
  email?: string;
};

const pessoa: IPessoa = {
  id: 34,
  nome: "Luciel",
  idade: 25,
  email: "luciel@gmail.com",
};

console.log("🚀 ~ pessoa:", pessoa);

function apresentaPessoa(pessoaParaApresentar: IPessoa): string {
  console.log("🚀 Chamando função  apresentaPessoa");

  if (pessoaParaApresentar.email) {
    return `Nome: ${pessoaParaApresentar.nome}; Idade: ${pessoaParaApresentar.idade}; Email: ${pessoaParaApresentar.email}`;
  }

  return `Nome: ${pessoaParaApresentar.nome}; Idade: ${pessoaParaApresentar.idade}; Pessoa não possui email`;
}

console.log("🚀 Retorno da função apresentaPessoa: ", apresentaPessoa(pessoa));

const apresentacao = apresentaPessoa(pessoa);

console.log("🚀 ~ apresentacao:", apresentacao.split(";"));

const pessoaSemEmail: IPessoa = {
  id: 52,
  nome: "Fulano",
  idade: 63,
};
console.log("🚀 ~ pessoaSemEmail:", pessoaSemEmail);

console.log(
  "🚀 Retorno da função apresentaPessoa: ",
  apresentaPessoa(pessoaSemEmail)
);
