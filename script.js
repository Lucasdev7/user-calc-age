// Script que contém uma função que ajuda a validar uma idade de usuário
function idade(ano_aniversario, mes_aniversario, dia_aniversario) {
    var d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),

        ano_aniversario = +ano_aniversario,
        mes_aniversario = +mes_aniversario,
        dia_aniversario = +dia_aniversario,

        quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }

    return quantos_anos < 0 ? 0 : quantos_anos;
}



console.log(idade(1980, 12, 11)); //  33

console.log(idade(2011, 2, 15));  // 2

console.log(idade(1993, 31, 5));  // 20


/*

function idade(ano_nascimento, mes_nascimento, dia_nascimento){

}


*/