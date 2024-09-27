

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



