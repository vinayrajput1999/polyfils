Array.prototype.pReverse=function(){
    const arr=this;
    let j=arr.length-1;
    for(let i =0 ;i<arr.length/2;i++){
        let res=arr[i];
        arr[i]=arr[j];
        arr[j]=res;
        j--;
    }
}
let array=[23,56,99,34,47];
array.pReverse();
console.log(array);