import { question } from "readline-sync";

let a: string = String(question('Nhap ky tu: '));

let D: number;
D = Number(a) - Number(a);

let lower: string = a.toLocaleLowerCase();
let upper: string = a.toLocaleUpperCase();

if(D == 0) {
    console.log('So');
}

else if(upper !== lower) {
    if(upper === a) {
        console.log('Hoa');
    }
    else {
        console.log('Thuong');
    }
}
else {
    console.log('DB');
}
