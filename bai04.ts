import { question } from "readline-sync";

let a: number = Number(question('Nhap nam a: '));

let D: number;
D = a%4;

let E: number;
E = a%100;

let K: number;
K = a%400;

if((D == 0 && E != 0) || K == 0) {
    console.log('Yes');
}
else {
    console.log('No');
}