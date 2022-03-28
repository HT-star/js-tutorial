let activeEffect = null
// set call back
function effect(fn){
    activeEffect = fn;
}

// exec set call back
function trigger(){
    activeEffect()
}

export { effect, trigger}