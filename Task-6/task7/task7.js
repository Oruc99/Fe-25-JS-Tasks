function existsAndTruthy(obj,str) {
    console.log(Boolean(obj[str]));
}
let obyekt = {
    ad:'oruc',
    age:16,
    car:'null',
    comp:undefined

}
existsAndTruthy(obyekt,'ad')