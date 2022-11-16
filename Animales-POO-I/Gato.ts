import { Animal } from "./Animal";
import { Mascota } from "./interfaceMascota";

export class Gato extends Animal implements Mascota {
    private nombre:string;

    constructor(paramNombre:string,paramPatas:number){
        super(paramPatas)
        this.nombre = paramNombre;
    }

    public comer():void{
        console.log('Esta comiendo');
        
    }

    public caminar(paramPatas:number):void{
        console.log('Esta caminando');        
    }

    public jugar(paramNombre:string):void{
        console.log('Esta jugando!');
    }

    public getNombre():string {
        return this.nombre;
    }

    public setNombre(paramNombre:string){ 
        this.nombre = paramNombre;
    }
}