import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import {AlertOctagon, AlertTriangle, CheckCircle, Info} from "react-feather";

const ICONS_BY_VARIANT = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon,
};

function ToastShelf({toasts, dismissToast}) {
	return (
		<ol className={styles.wrapper}>
			{toasts.map(({variant, message, key}) =>
				<li className={styles.toastWrapper} key={key}>
					<Toast Icon={ICONS_BY_VARIANT[variant]} variant={variant} key={key}
					       dismissToast={() => dismissToast(key)}>{message}</Toast>
				</li>)}
		</ol>
	);
}

export default ToastShelf;
