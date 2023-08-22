"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Astronauta {
    /*public id: number;
    public nombre: string;
    public record: string;*/
    constructor(id, nombre, _record, recompensa, mission = []) {
        this.id = id;
        this.nombre = nombre;
        this._record = _record;
        this.recompensa = recompensa;
        this.mission = mission;
        /*this.id = id;
        this.nombre = nombre;
        this.record = record;*/
    }
    getLaunches() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'https://api.spacexdata.com/v3/launches';
            const { data } = yield axios_1.default.get(url);
            //console.log(data);
            //return data
            let conta = 0;
            data.forEach((element) => {
                const { mission_name } = element;
                this.mission[conta] = mission_name;
                conta = conta + 1;
            });
            console.log(this.mission);
            return this.mission;
        });
    }
    obtenrerRecompensa(record) {
        if (record == 'ARTEMIS') {
            this.recompensa = 'En hora buena';
            return this.recompensa;
        }
    }
    set record(record) {
        this._record = record;
    }
    get record() {
        return this._record;
    }
}
//via contructor
const astronautaEsteban = new Astronauta(1, "Esteban Ruiz", "500mt", 'Ninguna');
console.log(astronautaEsteban);
console.log(astronautaEsteban.nombre);
//via setters
astronautaEsteban.record = '1000 mts';
console.log(`El record de ${astronautaEsteban.nombre} es de ${astronautaEsteban.record}`);
console.log(astronautaEsteban.recompensa);
astronautaEsteban.obtenrerRecompensa('ARTEMIS');
console.log(astronautaEsteban.recompensa);
//////////////////////////////
astronautaEsteban.getLaunches();
