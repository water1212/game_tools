function ez_random(min: number, max: number, allowNegatives?: boolean): number {
    if(allowNegatives) {
        return Math.floor((Math.random() * (max * 2))) - max;
    }
    
    return Math.floor((Math.random() * max)) + min;
}

function degreesToRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
}

export {ez_random, degreesToRadians}