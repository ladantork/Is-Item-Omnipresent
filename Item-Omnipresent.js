function isItemOmnipresent(arrayOfArrays, item) {
    // Your code goes here...
     for (let i = 0; i < arrayOfArrays.length; i++) {
            if (!arrayOfArrays[i].includes(item)) {
                return false;
            }
        }
        
        return true;
    }