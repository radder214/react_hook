/**
 * custom Hooks : useConfirm
 * 해당 챕터에서는 useState, useEffect, useRef 등의 Hooks을 사용하지는 않았다.
 */
const useConfirm = (message = "", onConfirm, onCancel) => { // message = "" [default parameter]
    if (!onConfirm || typeof onConfirm !== 'function') {
        return
    };
    if (!onCancel || typeof onCancel !== 'function') {
        return
    };

    const confirmAction = () => {
        if (window?.confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    }
    return confirmAction;
};

export default useConfirm