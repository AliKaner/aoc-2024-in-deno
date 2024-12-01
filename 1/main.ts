function main() {
    let result = 0;
    let result2 = 0;
    let repeat = 0;

    const data = Deno.readTextFileSync("data.txt");
    const lines = data.split("\n");

    const leftArray: number[] = [];
    const rightArray: number[] = [];

    for (const line of lines) {
        if (!line.trim()) continue;

        const numbers = line.split(/\s+/).map(Number);
        leftArray.push(numbers[0]);
        rightArray.push(numbers[1]);
    }
     //second part
     for (let i = 0; i < leftArray.length; i++) { 
        for (let j = 0; j < rightArray.length; j++) { 
            if(leftArray[i] === rightArray[j] ) {
                repeat++;
            }
            result2 += repeat * leftArray[i];
            repeat = 0;
        }
     }

    leftArray.sort((a, b) => a - b);
    rightArray.sort((a, b) => a - b);

    //first part
    for (let i = 0; i < leftArray.length; i++) {
        result += Math.abs(leftArray[i] - rightArray[i]);
    }
    console.log(result);
    console.log(result2);

}

main();
