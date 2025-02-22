import axios from "axios";
import { useState, useEffect, useRef } from "react";

const useFetchApiData = (url_endpoint) => {
    const [data, setData] = useState(null);
    const hasFetched = useRef(false); // Prevent multiple fetches
    const domain = process.env.VITE_APP_BACKEND_URL;
    const url = domain + url_endpoint;
    const accessToken = localStorage.getItem("accessToken");

    useEffect(() => {
        if (!hasFetched.current) {
            hasFetched.current = true; // Mark as fetched
            axios.get(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((response) => {
                console.log("Fetched API Data:", response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
        }
    }, []);

    return data;
};

export default useFetchApiData;
