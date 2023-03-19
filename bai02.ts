import { question } from "readline-sync";

let a: number = Number(question('Nhap so a (3 chu so):'));

const D: number = Math.floor(a/100);

if(D == 9) {
    console.log('Yes');
}
else {
    console.log('No');
}

