function cleanText(text: string): string {
    const regex = /don't\(.*?do\(\)/gs;
    return text.replace(regex, "");
}

function findMulPatterns(text: string): string[] {
    const regex = /mul\(\d{1,3},\d{1,3}\)/g;
    const matches = text.match(regex);
    return matches || [];
}

function calculateMulSum(patterns: string[]): number {
    let totalSum = 0;

    for (const pattern of patterns) {
        const numbers = pattern.match(/\d+/g)?.map(Number);

        if (numbers && numbers.length === 2) {
            const product = numbers[0] * numbers[1]; 
            totalSum += product;
        }
    }
    return totalSum;
}

function main() {
    const text = Deno.readTextFileSync("data.txt").trim();
    const firstQuestion = findMulPatterns(text);
    const secondQuestion = findMulPatterns(cleanText(text));

    const firstQuestionSum = calculateMulSum(firstQuestion);
    const secondQuestionSum = calculateMulSum(secondQuestion);

    console.log("First Q Total:", firstQuestionSum);
    console.log("Second Q Total:", secondQuestionSum);
}

main();
