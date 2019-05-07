export function sumBonus(items) {

    let total = 0;
    const percent = 0.05;
    const minValueForBonus = 10000;
    for (const item of items) {
        if (item > minValueForBonus) {
            total += (item * percent);
        }
    }
    return total;
}