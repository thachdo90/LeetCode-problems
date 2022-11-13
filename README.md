# LeetCode-problems
This repo will house all the the LeetCode problems that I work on, along with test suites.

Notes:

STRINGS
- Working with strings is messy, so many cases
using charCodeAt is helpful
Look into using Regex

DP:
- When a brute force techniques require cubic time, traverse the array 3 times, think about using two pointers to traverse simultaneously, especially in a sorted array, so avoid traverse the array by one time (cubic -> quadratic)

Hashmaps:
- Can be useful to store index and calculate lengths between indices quickly.
- When dealing with a variable and we need to refer to different values of that variable as it changes, store it in a hashmap so we can avoid having to recompute it
- If stuck, but problem can be solved in quadratic or cubic time, work through those anyways and ask "how can a hashmap remove the need of an iteration"

Sliding Window:
- Useful for substrings

ARRAYS:
- Whenever an array is sorted, take advantage of binary search

LINKED LISTS:
- think about using pointers and false head


BFS
- iteratively (example O1 matrix)
  - learned to use a queue to process one level of the tasks in the queue, while adding the next level to a new queue
  - this strategy ended up being O(M), size of Matrix, because the tasks don't get added to the queue if it's already done/optimal
  - I thought about using DFS here but it would have been costly since the work that's done by one cell, would have to be overwritten by the the work of another cell. But using BFS, they're simultaneously updating their work outward.

Bit manipulation
 - need to learn about this