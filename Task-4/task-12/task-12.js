function show(month) {
    switch (month) {
        case 'yanvar':
            console.log('31');
            break;
        case 'fevral':
            console.log('28');
            break;
        case 'mart':
            console.log('31');
            break;
        case 'aprel':
            console.log('30');
            break;
        case 'may':
            console.log('31');
            break;
        case 'iyun':
            console.log('30');
            break;
        case 'iyul':
            console.log('31');
            break;
        case 'avqust':
            console.log('31');
            break;
        case 'sentyabr':
            console.log('30');
            break;
        case 'oktyabr':
            console.log('31');
            break;
        case 'noyabr':
            console.log('30');
            break;
        case 'dekabr':
            console.log('31');
            break;
        default:
            console.log('bele bir ay yoxdur');
    }
    
}
let month = prompt('ay daxil edin')
show(month)