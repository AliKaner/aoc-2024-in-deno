export type DirectionType = "inc" | "dec" | undefined;

function isItSafe(numbers: number[]): boolean {
    let direction: DirectionType = undefined;

    for (let i = 0; i < numbers.length - 1; i++) {
        const difference = numbers[i] - numbers[i + 1];
        const currentDirection: DirectionType = difference > 0 ? "dec" : "inc";

        if (direction && direction !== currentDirection) {
            return false; 
        }

        direction = currentDirection;

        if (Math.abs(difference) < 1 || Math.abs(difference) > 3) {
            return false; 
        }
    }

    return true; 
}

function isItSafeWithSingleBad(numbers: number[]): boolean {
    for (let i = 0; i < numbers.length; i++) {
        const filteredNumbers = numbers.filter((_number, index) => index !== i); 
        if (isItSafe(filteredNumbers)) {
            return true; 
        }
    }
    return false; 
}

function main() {
    const lines = Deno.readTextFileSync("data.txt").split("\n");
    let safeReportsCount = 0;

    for (const line of lines) {
        const numbers = line.trim().split(/\s+/).map(Number);

        if (isItSafe(numbers) || isItSafeWithSingleBad(numbers)) {
            safeReportsCount++;
        }
    }

    console.log(`Number of safe reports: ${safeReportsCount}`);
}

main();
