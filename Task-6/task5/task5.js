function propertyTaker(obj,str){
    if(obj[str]){
        console.log(obj[str]);
    }
    else{
        console.log('error');
    }
}
propertyTaker({ continent: 'Asia', country: 'Japan'}, 'continent') 
