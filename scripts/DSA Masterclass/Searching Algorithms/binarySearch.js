const binarySearch = function(){

};

/**
 * binary search must be sorted
 *
 *
 * use divide and conquer...
 *
 * search for 15...
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 16, 17, 18, 19, 22, 25]
 *  L                          M                               R
 *                           too small
 * [-, -, -, -, -, -, -, -, -, -, 12, 15, 16, 17, 18, 19, 20, 21]
 *                                L           M               R
 *                                           too large
 * [-----------------------------12, 15, 16, -, -, -, -, -, -, -]
 *                               L   M   R
 *                                   |
 *                              found 15!
 */