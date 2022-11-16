import { Animal } from "./Animal";
import { Arania } from "./Araña";
import { Gato } from "./Gato";
import { Pez } from "./Pez";
import { ListaDeAnimales } from "./ListaAnimales";

let arania1: Arania = new Arania(8);
let gato1:Gato = new Gato('Michi', 4);
let pez1:Pez = new Pez('pececito');
let animales:Animal[] = [arania1,gato1,pez1];   

let lista1:ListaDeAnimales = new ListaDeAnimales(animales);

console.log(lista1);
//No es un trabajo completo

// lista1.removerAnimal(Tigre1);//forzarError;
function MenorSeis(pLista:ListaDeAnimales){   
    if(this.pLista.length<6){
        throw new Error('El arreglo de animales debe ser mayor a 6 para estar aprobado');
    }
}
try{
    MenorSeis(lista1);
    console.log('el mensaje en try es: ');
} catch(error){
    console.log('El arreglo es menor a 6');
}