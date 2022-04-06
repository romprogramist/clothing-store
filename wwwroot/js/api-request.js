
// function apiRequest(apiURL, methodType = 'GET', data, completedFn, crashedFn) {
//     try {
//         const xhr = new XMLHttpRequest();
//         xhr.open(methodType, apiURL);
//         xhr.setRequestHeader('Content-Type', 'application/json');
//         xhr.addEventListener('load', () => {
//             if (Math.floor(xhr.status / 100) !== 2) {
//                 crashedFn(xhr.statusText, xhr.responseText ? JSON.parse(xhr.responseText) : null);
//                 return;
//             }
//             completedFn(xhr.responseText ? JSON.parse(xhr.responseText) : null)
//         });
//         xhr.addEventListener('error', () => {
//             crashedFn(null, xhr.responseText ? JSON.parse(xhr.responseText) : null);
//         });
//         xhr.send(JSON.stringify(data));
//     } catch(error) {
//         crashedFn(error);
//     }
// }

// apiRequest('https://0f74-2a00-1370-8178-99c1-4425-6e36-5d79-ec60.ngrok.io', 'GET', null, 
//     (response) => {
//         console.log(response)
//     },
//     (error, response) => {
//         console.log(error, response)
//     }
// );


