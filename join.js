Array.prototype.pJoin=function(param = ''){
    const arr=this;
    let val='';
    for(let i=0;i<arr.length-1;i++){
        val +=""+arr[i]+param;
    }
    val +=""+arr[arr.length-1];
    return val;
}
let arr=[];
let t=arr.pJoin(' ');
console.log(str);


