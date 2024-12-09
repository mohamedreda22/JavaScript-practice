const SumArrayOfItems = () => {
    let x = [10, 20, 30, 40, 50];
    
    // Using a loop
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    console.log("Sum using loop:", sum);

    // Using reduce
    let sumWithReduce = x.reduce((acc, curr) => acc + curr, 0);
    console.log("Sum using reduce:", sumWithReduce);
};

SumArrayOfItems();
