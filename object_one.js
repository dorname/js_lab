let age = {
    fakeAge:27,
    realAge_:28
};
Object.defineProperty(age,"realAge",{
    get(){
        return this.realAge_;
    },
    set(newValue){
        this.realAge_ = newValue;
        this.fakeAge = this.realAge_-1;
    }
});
age.realAge = 29;
console.log(age,age.realAge,age.fakeAge);