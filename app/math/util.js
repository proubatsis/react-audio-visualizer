const arraySum = (array, startIndex, length) => {
    let i = 0;
    const end = startIndex + length;
    let sum = 0;

    for(i = startIndex; i < end; i++) {
        sum += array[i];
    }

    return sum;
};

export default { arraySum };
