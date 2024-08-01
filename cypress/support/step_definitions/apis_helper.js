export { delete_user  }

function get_accesss_token() {
    return cy.request({
        method: 'POST',
        url: 'https://auth-nagwa.auth.us-east-1.amazoncognito.com/oauth2/token?grant_type=client_credentials&scope=apiauthidentifier/json.read&client_id=7saath128c9eifqvl722qc8e9g',
        form: true,
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic N3NhYXRoMTI4YzllaWZxdmw3MjJxYzhlOWc6MTZqaXRvanRjcWRoYTJlazZqZzRmOHRtN3MybmMyamQ0ODIyMGJpcm1kOWFucGFiaDJ2ag==',
            'Cookie':'XSRF-TOKEN=79215306-fd68-42ca-89d1-f54e98ebe634'
        }
    })
}


function delete_user(){
    var result = get_accesss_token()
    result.then(function (accesss_token_response) {
        return cy.request({
            method: 'Get',
            failOnStatusCode: false,
            url: Cypress.env("baseURL") + `users/check-email-nagwaclasses?email=${Cypress.env("new_user_email")}`,
            headers: {
                'Authorization': 'Bearer ' + accesss_token_response.body.access_token
            }
        }).then((user_response) => {
            if (user_response.status == 200){
                return cy.request({
                    method: 'Post',
                    failOnStatusCode: false,
                    url: Cypress.env("baseURL") + `nagwa-classes/user/DeleteUser`,
                    headers: {
                        'Authorization': 'Bearer '+`${accesss_token_response.body.access_token}'`,
                        'token':`${user_response.body.result.token}`,
                        'accept':'text/plain',
                        'Content-Type': 'application/json'
                    },
                    body: `'${user_response.body.result.code}'`
                }).then((delete_response)=>{
                  expect(delete_response.status).equal(200)
                })
            }
            else{
                cy.log("check email return error " + user_response.status)
            }
         
        })
    })
}





