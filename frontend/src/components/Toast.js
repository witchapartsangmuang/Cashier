import { useEffect } from "react"

function Toast ({toastprops}) {
    return (
        <div className="Toast slide-keyframe">
            <div className="ToastTitle slide-keyframe">{toastprops.toasttitle}</div>
            <div className="ToastContext slide-keyframe">{toastprops.toastcontext}</div>
        </div>
    )
}
export default Toast