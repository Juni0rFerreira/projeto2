const pessoas = [
    {
        nome: "Ana Silva",
        idade: 28,
        hobbies: ["ler", "viajar", "cozinhar"]
    },
    {
        nome: "Marcos Teixeira",
        idade: 32,
        hobbies: ["futebol", "dançar", "corrida"]
    },
    {
        nome: "Julia Vaz",
        idade: 24,
        hobbies: ["pintar", "dançar", "assistir séries"]
    },
    {
        nome: "Roberto Nunes",
        idade: 29,
        hobbies: ["música", "cinema", "surf"]
    },
    {
        nome: "Carla Moraes",
        idade: 35,
        hobbies: ["yoga", "leitura", "jardinagem"]
    },
    {
        nome: "Felipe Costa",
        idade: 20,
        hobbies: ["skate", "escalada", "jogar xadrez"]
    },
    {
        nome: "Larissa Machado",
        idade: 26,
        hobbies: ["programar", "ciclismo", "escalada"]
    },
    {
        nome: "Tiago Lopes",
        idade: 31,
        hobbies: ["corrida", "escalada", "natação"]
    },
    {
        nome: "Bianca Faria",
        idade: 33,
        hobbies: ["cozinhar", "meditação", "viagens internacionais"]
    },
    {
        nome: "Gustavo Henrique",
        idade: 27,
        hobbies: ["ler HQs", "videogames", "aprender idiomas"]
    }
];

// 6. Listar a menor e maior idade, com seus respectivos nomes
var maiorIdade = pessoas[0].idade;
var menorIdade = pessoas[0].idade;
var pessoaVelha = pessoas[0].nome;
var pessoaNova = pessoas[0].nome;

for (var i = 1; i < pessoas.length; i++) {
    if (pessoas[i].idade > maiorIdade) {
        maiorIdade = pessoas[i].idade;
        pessoaVelha = pessoas[i].nome;
    }
    if (pessoas[i].idade < menorIdade) {
        menorIdade = pessoas[i].idade;
        pessoaNova = pessoas[i].nome;
    }
}

console.log("Pessoa mais velha:", pessoaVelha, "com", maiorIdade, "anos");
console.log("Pessoa mais nova:", pessoaNova, "com", menorIdade, "anos");