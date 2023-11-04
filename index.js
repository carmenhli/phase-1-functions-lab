// Code your solution in this file!
function distanceFromHqInBlocks(street){
    const hq = 42;
    return Math.abs(street - hq);
}

function distanceFromHqInFeet(someValue){
    const blocks = distanceFromHqInBlocks(someValue);
    const feet = blocks * 264;
    return feet;
}

function distanceTravelledInFeet(startBlock,destinationBlock){
    return Math.abs(destinationBlock - startBlock) * 264;
}

function calculatesFarePrice(start,destination){
    const distanceInFeet = Math.abs(start-destination)*264;
    let fare = 0;

    if (distanceInFeet <=400){
        fare = 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000){
        fare = (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500){
        fare = 25;
    } else {
        fare = 'cannot travel that far';
    }
    return fare;
}
