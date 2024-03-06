//stack(primitive) -
//The stack is the memory set aside as scratch space for a thread of execution. When a function is called, a block is reserved on the top of the stack for local variables and some bookkeeping data. When that function returns, the block becomes unused and can be used the next time a function is called. The stack is always reserved in a LIFO (last in first out) order; the most recently reserved block is always the next block to be freed. This makes it really simple to keep track of the stack; freeing a block from the stack is nothing more than adjusting one pointer.

let myYoutubename ="Mahesh Bhagat"
let anotherName = myYoutubename
 anotherName = "code aur chai"

console.log(myYoutubename);
console.log(anotherName);

//heap(non-primitive)-
//The heap is memory set aside for dynamic allocation. Unlike the stack, there's no enforced pattern to the allocation and deallocation of blocks from the heap; you can allocate a block at any time and free it at any time. This makes it much more complex to keep track of which parts of the heap are allocated or free at any given time; there are many custom heap allocators available to tune heap performance for different usage patterns.

let userOne={
    email : "wb@google.com",
    upi : "sbi@123"
}
 
let userTwo = userOne 
 userTwo.email = "mahesh@google.com"

 console.log(userOne.email);
 console.log(userTwo.email); // 2nd user ki value change karne se 1st user ki bhi value change h0 gayi

