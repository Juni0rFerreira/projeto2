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

// 1. Imprimir o nome de todas as pessoas, só o primeiro nome → split
for (var i = 0; i < pessoas.length; i++) {
    var Split = pessoas[i].nome.split(' ');
    console.log(Split[0]);
}