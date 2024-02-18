# Is-Item-Omnipresent

Write a function that takes an array of nested arrays (arrayOfArrays) and an item to be found (item). It should return true if the passed item is present in all of the arrays inside arrayOfArrays. Otherwise, it should return false.

isItemOmnipresent([[1,2,3], [2,3,4], [3,4,5]], 3) //returns true, present in all

isItemOmnipresent([[1,2,3], [2,3,4], [3,4,5]], 9) //returns false, not present in any

isItemOmnipresent([[1,2,3], [2,3,4], [3,4,5]], 4) //returns false, only present in two arrays
