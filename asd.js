const PromptSync = require('prompt-sync');
const prompt = require('prompt-sync')();
let opcion = prompt('escribe algo: ');

let n1;

if( "a" == opcion){
    n1 =[4,7,9,2,3,6,1,5,8,0];
    for(i = 0; i < n1.length; i++){
        for(j = 0; j < n1.length; j++){
            if(n1[i]<n1[j]){
                aux = n1[i];
                n1[i] = n1[j];
                n1[j] = aux;
            }
        }
    }
    console.log(n1);
}
if("b" == opcion){
    n1 =[4,2,3,1,0];
    let n2 = [4,2]; let n3 = [3,1,0];
    let n4 = [4]; let n5 = [2]; let n6 = [3]; let n7 = [1]; let n8 = [0];
    n2 = [2,4]; n3 = [0,1,3];
    n1 = [0,1,2,3,4];
    console.log(n1);
}
