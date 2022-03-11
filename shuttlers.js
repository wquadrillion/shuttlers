
function calculateFare(routes, pickupdropoff ,fareType, baseFair, modLastDropOff) {
    //first check is the fareType exist --we'll skip that

    if(fareType === 'fixed'){
        return baseFair;

    }else if(fareType === 'flexi'){

        let pickUp = routes.indexOf(pickupdropoff[0]);
        let dropOff = routes.indexOf(pickupdropoff[1]);
        let distance = dropOff - pickUp;

        return baseFair * distance;

    }else if(fareType === 'modular'){

        let dropOff = routes.indexOf(pickupdropoff[1]);
        let lastDropOff = routes.indexOf(modLastDropOff);

        if(dropOff <= lastDropOff){
            return baseFair;
        }else{
            distance  = dropOff - lastDropOff;
            return baseFair + (distance * baseFair);
        }
    } 
}

let routes = ['Yaba', 'Sabo', 'Alagomeji', 'Adekunle', 'Post Office', 'Estate', 'Obalende'];

let pickupdropoff = ['Yaba', 'Estate'];

let fareType = ['fixed', 'flexi', 'modular'];

console.log(calculateFare(routes, pickupdropoff, fareType[0], 700, ''));
console.log(calculateFare(routes, pickupdropoff, fareType[1], 100, ''));

let p_d = ['Yaba', 'Adekunle'];
let modLastDropOff = 'Estate';

console.log(calculateFare(routes, p_d, fareType[2], 600, modLastDropOff));

p_d = ['Yaba', 'Obalende'];


console.log(calculateFare(routes, p_d, fareType[2], 500, modLastDropOff));