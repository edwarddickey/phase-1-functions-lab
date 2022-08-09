// Code your solution in this file!
function distanceFromHqInBlocks(street){
    let dist = (42- street);
    return(Math.abs(dist));
}
function distanceFromHqInFeet(dist){
    return distanceFromHqInBlocks(dist)*264;
}
function distanceTravelledInFeet(start,end){
    if (start > end){
        return (start - end)*264;
    } else {
        return(end - start)*264;
    }
}
function calculatesFarePrice(start, end){
    const trip = distanceTravelledInFeet(start,end);
if (trip <= 400){
    return 0;
} else if (trip > 400&&trip<=2000){
    return 0.02*(trip-400);
} else if (trip > 2000 && trip<2500){
    return 25;
}else{
    return "cannot travel that far";
}
}
distanceFromHqInFeet();
distanceFromHqInBlocks();
distanceTravelledInFeet();
calculatesFarePrice();