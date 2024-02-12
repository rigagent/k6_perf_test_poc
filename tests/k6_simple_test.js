import http from 'k6/http'
import { check, group, sleep } from 'k6'
import { envConfig } from '../env.js'
import { BaseClass } from '../utils/baseClass.js'
import * as functions from '../utils/functions.js'
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js'


export const options = {
  // thresholds: {
  //   'http_req_duration{name:/}': ['p(95) < 10000'],
  //   'http_req_duration{name:/contacts.php}': ['p(95) < 10000'],
  //   'http_req_duration{name:/news.php}': ['p(95) < 10000'],
  //   'http_req_duration{name:/pi.php?decimals=3}': ['p(95) < 10000'],
  //   'http_req_duration{name:/browser.php}': ['p(95) < 10000'],
  //   'http_req_waiting{name:/}': ['p(95) < 10000'],
  //   'http_req_waiting{name:/contacts.php}': ['p(95) < 10000'],
  //   'http_req_waiting{name:/news.php}': ['p(95) < 10000'],
  //   'http_req_waiting{name:/pi.php?decimals=3}': ['p(95) < 10000'],
  //   'http_req_waiting{name:/browser.php}': ['p(95) < 10000'],
  //   'http_reqs{name:/}': ['rate >= 0'],
  //   'http_reqs{name:/contacts.php}': ['rate >= 0'],
  //   'http_reqs{name:/news.php}': ['rate >= 0'],
  //   'http_reqs{name:/pi.php?decimals=3}': ['rate >= 0'],
  //   'http_reqs{name:/browser.php}': ['rate >= 0'],
  //   'http_req_failed{name:/}': ['rate >= 0'],
  //   'http_req_failed{name:/contacts.php}': ['rate >= 0'],
  //   'http_req_failed{name:/news.php}': ['rate >= 0'],
  //   'http_req_failed{name:/pi.php?decimals=3}': ['rate >= 0'],
  //   'http_req_failed{name:/browser.php}': ['rate >= 0']
  // },
  stages: [
    { target: 20, duration: "1m" },
    { target: 30, duration: "3m" },
    { target: 0, duration: "1m" }
  ]
}

export function setup(){
  const env = envConfig.performance
  return env
}

export default function(env){
  const baseClass = new BaseClass(env)
  let response

  // response = http.get(`${baseClass.url}`, functions.getParams(baseClass.params, '/'))
  // baseClass.checkResponseStatus(response)
  // baseClass.logData(response)
  // sleep(functions.getRandomBetween(1, 5))

  // response = http.get(`${baseClass.url}/contacts.php`, functions.getParams(baseClass.params, '/contacts.php'))
  // baseClass.checkResponseStatus(response)
  // baseClass.logData(response)
  // sleep(functions.getRandomBetween(1, 5))

  // response = http.get(`${baseClass.url}/news.php`, functions.getParams(baseClass.params, '/news.php'))
  // baseClass.checkResponseStatus(response)
  // baseClass.logData(response)
  // sleep(functions.getRandomBetween(1, 5))

  // response = http.get(`${baseClass.url}/pi.php?decimals=3`, functions.getParams(baseClass.params, '/pi.php?decimals=3'))
  // baseClass.checkResponseStatus(response)
  // baseClass.logData(response)
  // sleep(functions.getRandomBetween(1, 5))

  // response = http.get(`${baseClass.url}/browser.php`, functions.getParams(baseClass.params, '/browser.php'))
  // baseClass.checkResponseStatus(response)
  // baseClass.logData(response)
  // sleep(functions.getRandomBetween(1, 5))
  
  group('test group', function() {
    response = http.get(`${baseClass.url}`, functions.getParams(baseClass.params, '/'))
    baseClass.checkResponseStatus(response)
    baseClass.logData(response)
    sleep(functions.getRandomBetween(1, 5))

    response = http.get(`${baseClass.url}/contacts.php`, functions.getParams(baseClass.params, '/contacts.php'))
    baseClass.checkResponseStatus(response)
    baseClass.logData(response)
    sleep(functions.getRandomBetween(1, 5))

    response = http.get(`${baseClass.url}/news.php`, functions.getParams(baseClass.params, '/news.php'))
    baseClass.checkResponseStatus(response)
    baseClass.logData(response)
    sleep(functions.getRandomBetween(1, 5))

    response = http.get(`${baseClass.url}/pi.php?decimals=3`, functions.getParams(baseClass.params, '/pi.php?decimals=3'))
    baseClass.checkResponseStatus(response)
    baseClass.logData(response)
    sleep(functions.getRandomBetween(1, 5))

    response = http.get(`${baseClass.url}/browser.php`, functions.getParams(baseClass.params, '/browser.php'))
    baseClass.checkResponseStatus(response)
    baseClass.logData(response)
    sleep(functions.getRandomBetween(1, 5))
  })

}

// export function handleSummary(data) {
//   return {
//     'summary.html': htmlReport(data)
//   }
// }
