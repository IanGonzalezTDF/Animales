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

lista1.removerAnimal(gato1);
console.log(lista1);
//No es un trabajo completo