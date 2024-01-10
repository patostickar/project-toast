import React from "react";

import Button from "../Button";
import styles from "./ToastPlayground.module.css";

import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];


function ToastPlayground() {
	const [message, setMessage] = React.useState("");
	const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
	const [, setShowToast] = React.useState(false);
	const [toasts, setToasts] = React.useState([]);

	function dismissToast(key) {
		setToasts(toasts.filter((toast) => toast.key !== key));
	}

	function handleSubmitToast(e) {
		e.preventDefault();
		setToasts([...toasts, {variant, message, key: crypto.randomUUID()}]);
		setShowToast(false);
		setMessage("");
		setVariant(VARIANT_OPTIONS[0]);
	}

	return (
		<div className={styles.wrapper}>
			<header>
				<h1>Toast Playground</h1>
				<img alt="Cute toast mascot" src="/toast.png"/>
			</header>

			<ToastShelf toasts={toasts} dismissToast={dismissToast}></ToastShelf>

			<form className={styles.controlsWrapper} onSubmit={handleSubmitToast}>
				<div className={styles.row}>
					<label
						htmlFor="message"
						className={styles.label}
						style={{alignSelf: "baseline"}}
					>
						Message
					</label>
					<div className={styles.inputWrapper}>
            <textarea
	            id="message"
	            className={styles.messageInput}
	            value={message}
	            onChange={(e) => setMessage(e.target.value)}
            />
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						{VARIANT_OPTIONS.map((option) => {
							return (
								<label key={option} htmlFor={`variant-${option}`}>
									<input
										id={`variant-${option}`}
										type="radio"
										name="variant"
										value={option}
										checked={variant === option}
										onChange={(event) => {
											setVariant(event.target.value);
										}}
									/>
									{option}
								</label>
							);
						})}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}/>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button>Pop Toast!</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ToastPlayground;
