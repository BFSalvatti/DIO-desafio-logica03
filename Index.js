class heroi {

  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  atacar() {
   
    const ataques = {
      mago: "magia",
      guerreiro: 'espada',
      monge: "artes marciais",
      ninja: "shuriken"
    }

    const ataque = ataques[this.tipo]


    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
  }
}


const heroi1 = new heroi("Odette", 36, "mago");

const heroi2 = new heroi("X-borg", 28, "guerreiro")

const heroi3 = new heroi("Estes", 745, "monge")

const heroi4 = new heroi("Saber", 58, "ninja")

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()
