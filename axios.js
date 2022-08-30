import axios from 'axios';

export const post = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(response => {
            if (response.data.code === -2) {
                Message.error(response.data.message);
                //alert(response.data.message);
            }
            resolve(response.data);
        }, err => {
            reject(err)
        })
    })
};

export function get(url) {
    return new Promise((resolve, reject) => {
        axios.get(url).then(response => {
            if (response.data.code === -2) {
                Message.error(response.data.message);
                //alert(response.data.message);
            }
            resolve(response.data);
        }, err => {
            reject(err)
        })
    })
}