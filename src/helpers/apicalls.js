

const getapiCall = (url, method) => {
    const result = await fetch(url,
        {
            method: method,
            headers: {
                // Accept: "application/x-www-form-urlencoded",
                // "Content-Type": "application/json",
                // "Authorization": localStorage.getItem("authtoken"),
            },
        }
    );
    const data = await result.json();
    return data;
}


export { getapiCall };