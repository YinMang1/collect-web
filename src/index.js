
const pending = 'pending'
const fulfilled = 'fulfilled'
const rejectd = 'rejected'
Class Promise {
    constructor(executor) {
        this.status = pending;
        this.value = undefined;
        function resolve(value) {

        }
        function reject(value) {

        }
        function then(fulfillCall,rejectCall) {

        }

        executor()
    }
}


module.exports = {
    hello: 'this is my world'
}