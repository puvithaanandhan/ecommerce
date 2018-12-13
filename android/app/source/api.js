export const get = uri =>
new Promise(resolve => {
let response;

switch (uri)
{
    case '/products' : response=
                       [
                        {
                            id : 1,
                            name : 'Barbie-doll',
                            img : 'https://www.google.co.in/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiugc-T6pTfAhXihOAKHQcwApEQjRx6BAgBEAU&url=https%3A%2F%2Fwww.target.com%2Fp%2Fbarbie-collector-birthday-wishes-doll%2F-%2FA-16205654&psig=AOvVaw18VRCZZ_X63_5g9eegAwWL&ust=1544516408487947',
                            price: '500'
                        },
                       ];
                       break;
        default : return null;
}
setTimeout(() => resolve(response), 1000);
return null;
});
export const post = (uri, data) =>
new Promise((resolve, reject) => {
let response;

switch(uri)
{
    case '/login' : if(data.email==='user@gmail.com' && data.password==='user123')
                    {
                            response = {
                                email:'user@gmail.com',
                                password:'user123'
                            }
                    }
                    else
                    {
                        setTimeout(()=>reject('Unauthorised'),1000);
                        return null;
                    }   
                    break;
        case '/register':
                    response = data;
                    break;
        case '/pay':
                    if (data.card.cvc === '123') 
                    {
                        response = true;
                    } 
                    else 
                    {
                        setTimeout(() => reject('Payment not authorised'), 1000);
                        return null;
                    }
                    break;
        default:
                    return null;
                    
}
setTimeout(()=>resolve(response),1000);
return null;

});
export const put = () => {};