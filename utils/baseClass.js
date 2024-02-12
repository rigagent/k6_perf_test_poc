import { check } from 'k6'


export class BaseClass{
    constructor(env){
        this.url = `${env.environment.protocol}://${env.environment.url}`
        this.params = {
            timeout: env.timeout.requestTimeout
        }
    }

    checkResponseStatus(response, expectedStatus = 200){
        if (Array.isArray(response)) {
            response.forEach(element => check(element, { 'status was OK': (r) => r.status == expectedStatus }))
        } else {
            check(response, { 'status was OK': (r) => r.status == expectedStatus })
        }
    }

    logData(response){
        const timestamp = Date.now()
        const date = new Date(timestamp)
        const options = {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
            timeZoneName: 'short',
          }
          const formattedDate = date.toLocaleString(undefined, options)
        if (Array.isArray(response)) {
            response.forEach(element => console.log(`${formattedDate}, "${element.url}", ${element.status}, ${Math.round(element.timings.duration,0)}`))
        } else {
            console.log(`${formattedDate}, "${response.url}", ${response.status}, ${Math.round(response.timings.duration,0)}`)
        }
    }
}
