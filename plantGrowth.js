const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const minSpacePerPlant = 0.8;
const initialPlants = 20;

function calculatePlantsAfterWeeks(initial, weeks) {
    return initial * Math.pow(2, weeks);
}

function decideAction(week) {
    const plants = calculatePlantsAfterWeeks(initialPlants, week);
    const maxCapacity = area / minSpacePerPlant;
    const plantPercentage = plants / maxCapacity;

    if (plantPercentage > 0.8) {
        return 'Prune';
    } else if (plantPercentage >= 0.5 && plantPercentage <= 0.8) {
        return 'Monitor';
    } else {
        return 'Plant more';
    }
}

function expandedGardenSpace(initial, weeks) {
    const plants = calculatePlantsAfterWeeks(initial, weeks);
    const requiredArea = plants * minSpacePerPlant;
    const newRadius = Math.sqrt(requiredArea / PI);
    return newRadius;
}

function checkGardenSpace(initial, radius) {
    try {
        const requiredArea = initial * minSpacePerPlant;
        const availableArea = PI * radius * radius;

        if (requiredArea > availableArea) {
            throw new Error("Insufficient space for the number of plants!");
        }
        return "Sufficient space available.";
    } catch (error) {
        console.error(error.message);
    }
}

console.log(`Week 1: ${decideAction(1)}`);
console.log(`Week 2: ${decideAction(2)}`);
console.log(`Week 3: ${decideAction(3)}`);
console.log(`New radius for expanded garden with 100 plants after 10 weeks: ${expandedGardenSpace(100, 10).toFixed(2)} meters`);
console.log(checkGardenSpace(100, 5));
