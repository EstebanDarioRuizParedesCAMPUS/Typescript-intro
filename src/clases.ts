import axios from "axios"
import { APISpaceX } from "./interface/apispacex-response.interface";

class Astronauta {
    /*public id: number;
    public nombre: string;
    public record: string;*/

    constructor(public id:number,
        public nombre: string,
        private _record:string,
        public recompensa:string,
        public mission: string[] = []){
        /*this.id = id;
        this.nombre = nombre;
        this.record = record;*/
    }

    async getLaunches(){
        const url = 'https://api.spacexdata.com/v3/launches'
        const {data} = await axios.get<APISpaceX>(url)
        //console.log(data);
        //return data
        let conta = 0
        data.forEach((element:any) => {
            const {mission_name} = element
            this.mission[conta] = mission_name
            conta = conta + 1
        });
        console.log(this.mission);
        return this.mission        
    }

    obtenrerRecompensa(record:string){
        if(record == 'ARTEMIS'){
            this.recompensa = 'En hora buena'
            return this.recompensa
        }
    }


    set record(record:string){
        this._record = record
    }

    get record():string{
        return this._record
    }

}


//via contructor

const astronautaEsteban = new Astronauta(1,"Esteban Ruiz", "500mt",'Ninguna')

console.log(astronautaEsteban);
console.log(astronautaEsteban.nombre);

//via setters

astronautaEsteban.record = '1000 mts'

console.log(`El record de ${astronautaEsteban.nombre} es de ${astronautaEsteban.record}`);


console.log(astronautaEsteban.recompensa);

astronautaEsteban.obtenrerRecompensa('ARTEMIS')

console.log(astronautaEsteban.recompensa);

//////////////////////////////

astronautaEsteban.getLaunches()

