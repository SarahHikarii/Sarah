/*var media = 7;
if (media>=7){
    console.log ("aprovado");
}*/

/*var media = 4;
if (media>=7){
    console.log ("aprovado");
} else {
    console.log ("reprovado");
}*/

/*var media = 4;
var faltas =1;
if(media >=7){
    console.log("Aprovado");
}else if (media >=5 && faltas <2){
    console.log ("recuperação");
} else {
    console.log ("reprovado");
}
for (let numero =1; numero <=10; numero ++){
    console.log(numero);
}*/

/*let x=3;
const y=x++;
console.log(`x:${x},y:${y}`);*/

const listadepecas = ['pecasdeteste', 'AB', 'peca B']
console.log ('quantidade de caracteres')
if (listadepecas.length <=10){
}
console.log('as peças pode ser cadastradas');
for (let index =0; index <listadepecas.length; index ++ ){
    const pecaatual = listadepecas [index];
    if (pecaatual.length <3){
        console.log (pecaatual + ':a peça possui nome inferior a 3 caracteres e não pode ser cadastrada')
    }else {
        console.log (pecaatual + ':a peça pode ser cadastrada')
    }
}
    console.log ('peso da peça')
    const pesodapecaemgramas =50;
    if (pesodapecaemgramas >=100){
        console.log('pesosuficiente')
    } else {
        console.log ('valor insufiente')
    }
