import { getRequests } from "./dataAccess.js"

const convertRequests = (obj) => {
   return `<li>${obj.description}</li>`
}


export const Requests = () => {
    const requests = getRequests() // grab the local state of the requests data

    let html = `
        <ul>
            ${
                requests.map(convertRequests).join("")
            }
        </ul>
    `

    return html
}
