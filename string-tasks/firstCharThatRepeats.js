function firstRepeat(chars) {
	let arrIndex = chars.split('').map(m => {
        return chars.split('').indexOf(m);
    });
    const objIndex = {}
    arrIndex.map(m=>{
        if(objIndex[m] === undefined){
            objIndex[m] = 0
        }
        objIndex[m] += 1
    });
    for(let i = 0; i < Object.entries(objIndex).length;i++){
        if(Object.entries(objIndex)[i][1] > 1){
            return chars[Object.entries(objIndex)[i][Number(0)]]
        }
    }
    return '-1'
}
console.log(firstRepeat("egolas"))