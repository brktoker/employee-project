export class Request {

    constructor(url) {
        this.url = url
    }

    async get() {
        const response = await fetch(this.url)
        const responseData = response.json()

        return responseData;
    }
    async post(data){
        const response = await fetch(this.url,{
            method: 'POST',
            body : JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
        })
        const responseData = await response.json()

        return responseData;
    }
    async put(data,eid){
        const response = await fetch(`${this.url}/${eid}`,{
            method: 'PUT',
            body : JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
        })
        const responseData = await response.json()

        return responseData;
    }

    async delete(eid){
        const response = await fetch(`${this.url}/${eid}`,{
            method: 'DELETE' 
        })
        return `Veri Silindi id:${eid}`

    }
}
