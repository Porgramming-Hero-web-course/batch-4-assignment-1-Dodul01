type Circle = {
    shape: 'circle';
    radius: number;
}

type Rectangle = {
    shape: 'rectangle';
    height: number;
    width: number;
}


const calculateShapeArea = (area: Circle | Rectangle): number => {
    if (area.shape === 'circle') {
        const calculateCircle: number = Math.PI * Math.pow(area.radius, 2);
        const roundUpNum: number = parseFloat(calculateCircle.toFixed(2))

        return roundUpNum;
    } else {
        const calculateRectangle: number = area.width * area.height;

        return calculateRectangle;
    }
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});

// console.log(rectangleArea);
// console.log(circleArea);