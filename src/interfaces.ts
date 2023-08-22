interface Song{
    id: number,
    name:string,
    year:number,
    albun?:string
}

const love:Song =  {
    id:1,
    name:'love',
    year: 222
}

console.log(love.year);

console.log(love.albun);

const toxic:Song = {
    id: 2,
    name: "Toxic",
    year: 2020,
    albun: 'Serotonin Dreams'
}

console.log(toxic.albun);
console.log(toxic.year);

const singer:{
    id: number,
    name: string,
    edad: number
} = {
    id: 1,
    name: "BoyWithUke",
    edad: 22
}

singer.id = 3

console.log(singer.id);
