import { extendObservalble } from 'mobx;'
class React {

    constructor() {
    extendObservable(this, {
        loading: true,
        isLoggedIn:false,
        username: ''
      });
    }
}
export default new React();
