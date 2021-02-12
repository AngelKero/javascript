type CallBAckError = Error | null;
type CallBack = (error: CallBAckError, response: Object) => void;
type SendRequest = (cb: CallBack) => void;

const sendRequest: SendRequest = (cb: CallBack): void => {
    if(cb){
        cb(null, {message: 'Todo salio Bien'});
    }
}