import axios from "axios";
const apiUrl = "http://localhost:8080/api";

export function getTasks() {
    return axios.get(apiUrl);
}
export function addTask(task, domain) {
    return axios.post(apiUrl + `/${domain}`, task);
}
export function addGraphic(task, domain) {
    return axios.post(apiUrl + `/${domain}`, task, { headers: { 'Content-Type': 'multipart/form-data' } });
}

// export function updateTask(id, task) {
//     return axios.put(apiUrl + "/" + id, task);
// }
// export function deleteTask(id) {
//     return axios.delete(apiUrl + "/" + id);
// }