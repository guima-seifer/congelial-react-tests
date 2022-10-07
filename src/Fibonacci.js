export const Fibonacci = n => {

    if(n < 2)  {
        return 1 //pass the first test, first to numbers from fibonacci sequence equal 1
    }

    return Fibonacci(n-1) + Fibonacci(n-2)

}