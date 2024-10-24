 class Observer{
    events = new Map();
    target = null;
    constructor(belong){
        this.id = Symbol(belong);
        this.target = belong;
    }
    //事件添加函数
    addListener(eventName,fn){
        let same_events = this.events.get(eventName)?this.events.get(eventName):[],
        setFlag = same_events.length === 0;
        same_events.push(fn);
        setFlag&&this.events.set(eventName,same_events);
    }
    fireEvent(eventName,...args){
        let same_events = this.events.get(eventName)?this.events.get(eventName):[],
        argsArray = [eventName].concat(args);
        if(!this.target){
            throw new Error("Oberviser can not be using while property target is null.");
        }
        if(same_events.length !== 0){
            this.doFireEvent(same_events,argsArray);
        }
    }
    doFireEvent(events,args){
        let eventFns = events.values();
        for(let fn of eventFns){
            fn.apply(this.target,args);
        } 
    }
}
module.exports = Observer;
// console.log(new Oberviser().target);