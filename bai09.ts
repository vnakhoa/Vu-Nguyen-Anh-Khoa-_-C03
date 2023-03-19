import { question } from "readline-sync";

let a: number = Number(question('Nhap so a (2 chu so): '));

let D: number;
D = Math.floor(a/10);

let E: number;
E = Number(String(a)[1]);

if(D == 1) {
    if(E == 0) {
        console.log('Muoi')
    }
    else {
        if(E >= 1 && E <= 9) {
            switch(E) {
                case 1:
                    console.log('Muoi mot');
                break;
                
                case 2:
                    console.log('Muoi hai');
                break;

                case 3:
                    console.log('Muoi ba');
                break;
                
                case 4:
                    console.log('Muoi bon');
                break;

                case 5:
                    console.log('Muoi nam');
                break;
                
                case 6:
                    console.log('Muoi sau');
                break;

                case 7:
                    console.log('Muoi bay');
                break;
                
                case 8:
                    console.log('Muoi tam');
                break;
                
                case 9:
                    console.log('Muoi chin');
                break;

                default:
                    console.log('Khong hop le');
                break;
            }
        }
    }
}
else {
    if( D >=2 && D <= 9) {
        if(E == 0) {
            switch(D) {
                case 2:
                    console.log('Hai muoi');
                break;

                case 3:
                    console.log('Ba muoi');
                break;
            
                case 4:
                    console.log('Bon muoi');
                break;

                case 5:
                    console.log('Nam muoi');
                break;
            
                case 6:
                    console.log('Sau muoi');
                break;

                case 7:
                    console.log('Bay muoi');
                break;
            
                case 8:
                    console.log('Tam muoi');
                break;
            
                case 9:
                    console.log('Chin muoi');
                break;

                default:
                    console.log('Khong hop le');
                break;
            }   
        }
        else {
            if(E >=1 && E <=9) {
                for( let k: number = 2; k <=9; k++) {
                    let n = ['Hai muoi', 'Ba muoi', 'Bon muoi', 'Nam muoi', 'Sau muoi', 'Bay muoi', 'Tam muoi', 'Chin muoi'];
                    let h = [' mot', ' hai', ' ba', ' bon', ' nam', ' sau', ' bay', ' tam', ' chin'];
                    if(D == k) {
                        for( let i: number = 1; i<=9; i++) {
                            if(E == i) {
                                console.log(n[k-2] + h[i-1]);
                                break;
                            }
                        }
                    break;
                    }  
                }
            }
        }
    }
}