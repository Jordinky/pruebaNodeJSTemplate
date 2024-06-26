

class Cuaderno{
    private size: string
    private marca:string

    constructor(size:string,marca:string){
        this.size = size
        this.marca = marca
    }

    printCuaderno():void{
        console.log(this.size + this.marca)
    }
    
    
}


class Cuadriculado extends Cuaderno implements iTipo{
    private tipo:string 

    constructor(tipo:string,size:string,marca:string){
        super(size,marca)
        this.tipo = tipo
    }
    tipoLibreta(tipolibreta:Cuadriculado){
        if(tipolibreta instanceof Cuadriculado){
            console.log("mi uso es para las matematicas")
        }

    }

}

class Rallado extends Cuaderno{
    private tipo:string 

    constructor(tipo:string,size:string,marca:string){
        super(size,marca)
        this.tipo = tipo
    }
    tipoLibreta(tipolibreta:Cuadriculado){
        if(tipolibreta instanceof Rallado){
            console.log("mi uso es para la literatura")
        }

    }

}