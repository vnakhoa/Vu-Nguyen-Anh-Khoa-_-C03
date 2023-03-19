import { question } from "readline-sync";

let a: number = Number(question('Nhap so a: '));
let b: number = Number(question('Nhap so b: '));
let c: number = Number(question('Nhap so c: '));

if(a == 0) {
    if(b == 0) {
        if(c == 0) {
            console.log('VSN');
        }
        else {
            console.log('VN');
        }
    }
    else {
        if(c == 0) {
            let x: number;
            x = 0/b;
            console.log('x = ',x);
        }
        else {
            let x: number;
            x = -c/b;
            console.log('x = ',x);
        }
    }
}
else {
    let K: number;
    K = b**2 -4*a*c;
    if(K > 0) {
        let x1, x2: number;
        x1 = (-b + Math.sqrt(K))/(2*a);
        x2 = (-b - Math.sqrt(K))/(2*a);
        console.log('x1 = ',x1, ', x2 = ',x2);
    }
    else {
        if(K == 0) {
            let x: number;
            x = -b/(2*a);
            console.log('x = ',x);
        }
        else {
            console.log('VN');
        }
    }
}