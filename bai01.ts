import { question } from "readline-sync";
let DTB:number = Number(question('Nhap diem trung binh: '));

if( DTB >=5)
    console.log('Dau');
else 
    console.log('Rot');