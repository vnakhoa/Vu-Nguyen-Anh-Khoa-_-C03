import { question } from "readline-sync";

type DMY = {
    day: number,
    month: number,
    year: number,
};

 let DMY1: DMY = {
    day : Number(question('Nhap ngay: ')),
    month : Number(question('Nhap thang: ')),
    year : Number(question('Nhap nam: ')),
};

if(DMY1.month >= 0 && DMY1.month <= 12) {
    switch(DMY1.month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            if(DMY1.day >= 1 && DMY1.day <= 31) {
                console.log('Valid');
            }
            else {
                console.log('Unvalid');
            }
        break;
        
        case 4: case 6: case 9: case 11:
            if(DMY1.day >= 1 && DMY1.day <= 30) {
                console.log('Valid');
            }
            else {
                console.log('Unvalid');
            }
        break;

        case 2:
            let D: number;
            D = (DMY1.year)%4;

            let E: number;
            E = (DMY1.year)%100;

            let K: number;
            K = (DMY1.year)%400;

            if((D == 0 && E != 0) || K == 0) {
                if(DMY1.day >=1 && DMY1.day <=29) {
                    console.log('Valid');
                }
                else {
                    console.log('Unvalid');
                }
            }
            else {
                if(DMY1.day >=1 && DMY1.day <=28) {
                    console.log('Valid');
                }
                else {
                    console.log('Unvalid');
                }
            } 
        break;
        
        default:
            console.log('Unvalid, nhap lai month');
        break;
    }
}