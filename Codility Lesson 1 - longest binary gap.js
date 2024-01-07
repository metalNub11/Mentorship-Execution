function solution(N) {
    // Implement your solution here
    const convertedToBinary = N.toString(2);
    const arrCheckZeroes = convertedToBinary.split("");
    
    if (!arrCheckZeroes.includes("0")){
        return 0;
        // return 0 for no zero binary numbers
    } else {
        // clear out the ending zeroes, if any.
        // loop until finds first one. then remove the quantity of ending zeroes.
        const noEndingZeroes = [];
        let counter = 0;
        for (let i=arrCheckZeroes.length-1; i>=0; i--){
            
            if(arrCheckZeroes[i]=='0'){
                counter++;
            } else {
                break;
            }
       };
        // console.log(counter);

        if (counter>0){
            arrCheckZeroes.splice(-counter);
        };

        // console.log(arrCheckZeroes);

        const str1 = arrCheckZeroes.join("");

        // console.log(str1);

        // on the mutated array, split as per 1. Then sort ascending. The larger string (our target) will show at first.
        // no 1 will be alive.
        const arr = str1.split("1");
        arr.sort((a, b) => b.length - a.length);
        
        return arr[0].length;    
    }

}
