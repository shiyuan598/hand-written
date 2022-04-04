function ajax(url, method) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.send();
        xhr.onreadystatechange((e) => {
            if (xhr.readyState !== 4) {
                return;
            }
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.response)
            }
        });
    });
}
