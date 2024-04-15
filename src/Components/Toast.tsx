import './toast.css'

interface toastProps{
    message: string;
    show: boolean
}

function Toast({message, show}:toastProps){
    return(
        <div className= {show? "toats": "show"}>
            <div className='message'>{message}</div>
        </div>
    );
}

export default Toast;