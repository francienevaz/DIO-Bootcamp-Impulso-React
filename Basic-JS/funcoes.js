const alunos = [
{
    nome: 'João',
    nota: 3,
    turma: '1A',
},
{
    nome: 'Paulo',
    nota: 6,
    turma: '1B',
},
{
    nome: 'Viviane',
    nota: 9.5,
    turma: '2B',
},
];


function alunosAprovados (arr, media ) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
        const {nota, nome} = arr[i];
        if (nota >= media) {
            aprovados.push(nome);
        }
        
    }   return aprovados;
}
console.log(alunosAprovados(alunos, 5))

