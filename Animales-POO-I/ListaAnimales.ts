import { Animal } from "./Animal";

export class ListaDeAnimales {
    private animales: Animal[];

    constructor(paramAnimales:Animal[]) {
        this.animales = paramAnimales;
    }

    public buscar(buscarAnimal:Animal):boolean {
        let flag:number=0;
        for(let i:number=0; i < this.animales.length; i++){
            if(buscarAnimal === this.animales[i]){
                console.log('¡Animal encontrado!')
                return true;
                flag++;
            }
        }
        if (flag ===1){
            return true;
        }
        else {
            console.log('No se encontraron resultados.');
            return false;
        }        
    }

    public agregarAnimal(paramAnimal:Animal):void{
        this.animales.push(paramAnimal);
    }

    public removerAnimal(paramAnimal:Animal):void {
        for(let i:number=0; i<this.animales.length;i++){
                if(paramAnimal === this.animales[i]){
                this.animales.splice(i,1);
                console.log(`Se elimino el animal ${paramAnimal}`);
            }
        }
    }
}