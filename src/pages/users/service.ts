import {request} from 'umi'

export const getRemoteList = async () =>{

    return request('api/users', {
        method: 'get',
      })
        .then(function(response) {
          return response;
        })
        .catch(function(error) {
          console.log(error);
    });
}

export const editRecord = async ({id, values}) => {
  return request('api/users/' + id, {
    method: 'put',
    data: values,
  })
    .then(function(response) {
      console.log('ok');
    })
    .catch(function(error) {
      console.log('error');
});

}