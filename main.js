class notaDosAlunos {
  nome;
  nota;

  constructor(nome, nota) {
    this.nome = nome;
    this.nota = nota;
  }

  descrever() {
    if (this.nota > 6) {
      console.log(`olá meu nome é ${this.nome}, e minha nota  é ${this.nota}`);
    } else {
      return ``;
    }
  }
}

const gabriel = new notaDosAlunos("Gabriel", 10);
const pedro = new notaDosAlunos("Pedro", 5);
gabriel.descrever();
pedro.descrever();
