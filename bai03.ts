import { question } from "readline-sync";

let a: number = Number(question('Nhap canh a: '));
let b: number = Number(question('Nhap canh b: '));
let c: number = Number(question('Nhap canh c: '));

if(a==b || b==c || a==c) {
    console.log('Yes');
}
else {
    console.log('No');
}