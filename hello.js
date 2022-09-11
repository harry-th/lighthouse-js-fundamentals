const sayHello =  () => {
    console.log('hello world')
}
sayHello()

let counter = function() {
    let counter = 0
    return function() {
        console.log(counter+=1)
        return counter
    }
}()
counter()
counter()
counter()



const sayHelloo = function(name) {
    console.log('Hello ' + name)
}