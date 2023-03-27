const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
}

class Api {
    constructor() {
        this._baseUrl = 'https://www.googleapis.com/books/v1';
         this._headers = {
            'content-type': 'application/json'  
        }
    }
    
    getBooks(searchQuery) {
        return fetch(`${this._baseUrl}/volumes?q=${searchQuery}`, {
            headers: this._headers
        }).then(onResponce)
    }
}

const api = new Api();

export default api
