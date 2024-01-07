function solution(A, K) {
    // Implement your solution here

    const arr = A;
    // console.log(arr);
    let holderOfPopped;
    for (let i=K; i>0; i--){
        holderOfPopped = arr.pop();
        arr.unshift(holderOfPopped);
        console.log(arr);
    }
    
    return arr;

}

// Use a FOR loop to iterate over the array for the given K number of times.
// Each time POP the last element and update the original array by adding the POP'd element to the beginning of the array.

