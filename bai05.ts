import { question } from "readline-sync";

let kw: number = Number(question('Nhap so kw: '));
let Total_money: number;

if(kw< 100) {
    Total_money = kw * 2000;
    console.log('Tien phai tra la:', Total_money);
}
else {
    if (kw >=100 && kw <200) {
        Total_money = kw * 2500;
        console.log('Tien phai tra la:', Total_money)
    }
    else {
        Total_money = kw * 3500;
        console.log('Tien phai tra la:', Total_money)
    }
}