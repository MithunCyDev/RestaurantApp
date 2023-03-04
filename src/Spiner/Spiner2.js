import { useEffect, useState } from "react";

const Spiner2 = () => {
    const [ loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);
};

export default Spiner2;