export default function newClass(){

    class ClassExample{
        constructor(){
            console.log('constructor');
        }
        methodSum(){
            console.log('Method sum 1 + 1 = '+ (1 + 1));
        }
        methodSub(){
            console.log('Method subtraction 1 - 1 = '+ (1 - 1));
        }
        methodForEachArrow(){
            var data = [{'id':'1'},{'name':'Martin'},{'company':'Sovos'}];
            data.forEach(elem =>{
                console.log(elem)
            });
        }
        
    }

    let objClassExample = new ClassExample();
        
    objClassExample.methodSum();
    objClassExample.methodSub();
    objClassExample.methodForEachArrow();

}