

# 2704. To Be Or Not To Be


```javascript

function expect(val) {
    return {
        toBe (val2){
            if(val===val2){
                return true;
            }else{
                throw new Error('Not Equal');
            }
        },
        notToBe (val2){
            if(val!==val2){
                return true;
            }else{
                throw new Error('Equal');
            }
        }
    }
}

```

---




# 2667. Create Hello World Function


```javascript


// chutiya giri
/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return ()=> 'Hello World';
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */


let f = createHelloWorld();

console.log(f());



// actuall solution
const createHelloWorld = () => ()=> 'Hello World'

```



