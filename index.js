// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if (distance<42){
        return 42-distance
    }else if(distance>42){
       return distance-42
    }
}
distanceFromHqInBlocks(43)
function distanceFromHqInFeet(start){
    return distanceFromHqInBlocks(start)*264
}
distanceFromHqInFeet(1)
function distanceTravelledInFeet(a,b){
    if(b>a){
        return (b-a)*264
    }else {
        return ((a-b)*264)
    }
    
}
console.log(distanceTravelledInFeet(43, 48))
function calculatesFarePrice(start, destination){
    let distanceCoverd=distanceTravelledInFeet(start,destination)
    if(distanceCoverd<400){
        return 0
    }
     else if(distanceCoverd>=400 && distanceCoverd<=2000){
        return (distanceCoverd-400)*0.02
    }else if(distanceCoverd>=2000){
        return 25;
    }else if(distanceCoverd>2500){
        return 'cannot travel that far'
    }
}
calculatesFarePrice(34, 24)