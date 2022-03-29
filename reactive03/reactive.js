
const handler = {
    get: function(target, prop, receiver) {
        // 渡されたオブジェクトのキーの値を返す
        const res = Reflect.get(target, prop, receiver)
        return res
    },
    set: function(target, prop, value, receiver){
        // target = オブジェクト名
        // prop = プロパティ名
        // value= 代入された値

        // Reflect.setで、 渡されたオブジェクトのキーの値に値を設定
        const res = Reflect.set(target, prop, value, receiver)
        trigger()
        return res
    }
};

function reactive(target){
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy
    return new Proxy(target, handler)
}

let activeEffect = null
function effect(fn){
    // console.logを設定
    activeEffect = fn;
}

function trigger(){
    // index.htmlで呼び出されたeffectにconsole.logが渡り、activeEffectに設定
    // activeEffectにセットされたconsole.logを実行
    activeEffect()
}

export { reactive, effect}