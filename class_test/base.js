const private_map = new WeakMap();
const Observer = require("./observer");
class Base {
    initInternalObj(type,configs){
        let me = this;
        const interalObj = Object.assign({
            "type":type
        },configs);
        const proxy = new Proxy(interalObj,{
            get(obj_self,key,self){
                me.getObserver().fireEvent("read","reading event testing");
                console.log(`Getting ${key}'s value`);
                return Reflect.get(obj_self,key,self);
            },
            set(obj_self,key,newValue,self){
                me.getObserver().fireEvent("write","writing event testing");
                console.log(`Setting ${key}'s value to ${newValue}`);
                return Reflect.set(obj_self,key,newValue,self);
            }
        });
        return proxy;
    }
    on(eventName,fn){
        this.getObserver().addListener(eventName,fn);
    }
    constructor(type,configs) {
        this.idProperty = {
            id:Symbol("id")
        };
        this.initObserver();
        this.init(this.initInternalObj(type,configs));
    }
    initObserver(){
        let observer ={ 
            "observer":Symbol("observer")
        };
        private_map.set(observer,new Observer(this));
        this.getObserver = function(){
            return private_map.get(observer);
        };
    }
    initProperty(configs){
        private_map.set(this.idProperty,configs);
    }
    set(key,val){
        let property = private_map.get(this.idProperty);
        property[key] = val;
    }
    get(key){
        return private_map.get(this.idProperty)[key];
    }
    init(configs){
        this.initProperty(configs);
    }

}
module.exports = Base;
