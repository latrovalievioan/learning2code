type Callback = () => void;

let currentEffect: Callback | null = null;

const effect = (cb: Callback) => {
    currentEffect = cb;
    cb()
    currentEffect = null;
}

const usages = new WeakMap<object, Callback[]>();

class Signal<T> {
    _value: T;

    constructor(value: T) {
        this._value = value;
    }

    get value() {
        if(currentEffect) {
            if(!usages.has(this)) {
                usages.set(this, [])
            } 

            usages.get(this).push(currentEffect)
        }

        return this._value;
    }

    set value(newValue: T) {
        this._value = newValue;

        usages.get(this)?.forEach(cb => cb())
    }
}

const signal = <T>(value: T) => {
    return new Signal(value)
} 

const x = signal(100)

effect(() => {
    console.log(x.value)
})

x.value--
x.value--
x.value--
x.value--
