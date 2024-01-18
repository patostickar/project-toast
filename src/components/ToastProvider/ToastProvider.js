import React from 'react';
import {useEscapeKey} from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext(null);

function ToastProvider({children}) {
	const [toasts, setToasts] = React.useState([]);

	const handleEscape = React.useCallback(() => {
		setToasts([]);
	}, []);

	useEscapeKey(handleEscape);

	function createToast(message, variant){
		setToasts([...toasts, {message, variant, id: crypto.randomUUID()}]);
	}

	function dismissToast(id) {
		setToasts(toasts.filter((toast) => toast.id !== id));
	}

	return (<ToastContext.Provider value={{
		toasts,
		createToast,
		dismissToast
	}}>{children}</ToastContext.Provider>);
}

export default ToastProvider;
