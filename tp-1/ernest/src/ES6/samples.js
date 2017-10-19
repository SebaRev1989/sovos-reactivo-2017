export default function sampleClass() {
    class sampleClass {
        constructor() {
            console.log('Constructor Init');
        }

        methodOne() {
            console.log('Caller to method one');
        };

        methodTwo() {
            console.log('Caller to method two');
        };
    }
    let objSampleClass = new sampleClass();

    objSampleClass.methodOne();
    objSampleClass.methodTwo();
}