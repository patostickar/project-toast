import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import {AlertOctagon, AlertTriangle, CheckCircle, Info} from "react-feather";
import {ToastContext} from "../ToastProvider";

const ICONS_BY_VARIANT = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon,
};

function ToastShelf() {
	const {toasts} = React.useContext(ToastContext);

	return (
		<ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
			{toasts.map(({variant, message, id}) =>
				<li className={styles.toastWrapper} key={id}>
					<Toast Icon={ICONS_BY_VARIANT[variant]} variant={variant} id={id}>{message}</Toast>
				</li>)}
		</ol>
	);
}

export default ToastShelf;
