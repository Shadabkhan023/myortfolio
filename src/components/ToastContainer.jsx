import { useEffect, useState } from "react";

function ToastContainer() {
  const [Toaster, setToaster] = useState(null);

  useEffect(() => {
    import("react-hot-toast").then((mod) => setToaster(() => mod.Toaster));
  }, []);

  return Toaster ? <Toaster /> : null;
}

export default ToastContainer;
