export const apiGet = (url) => () => fetch(url).then(res => res.json())

export const apiPut = (url, id, customer) => () =>
  fetch(`${url}${id}`, {
    method: 'PUT',
    body: JSON.stringify(customer),
    headers: new Headers({'Content-type': 'application/json'})
  }).then(res => res.json())
    .then(r => {
      if (r.error) {
        return ({error: r.validation})
      }
      return r
    })

export const apiPost = (url, customer) => () =>
  fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify(customer),
    headers: new Headers({'Content-type': 'application/json'})
  }).then(res => res.json())
    .then(r => {
      if (r.error) {
        return ({error: r.validation})
      }
      return r
    })