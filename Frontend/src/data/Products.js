import axios from 'axios';

const orderData = new FormData()
const products = []

orderData.append("id", 114)
axios.post('http://192.168.43.219/lygi.web/public/api/cart_get',
    orderData,
    {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
        }
    }
).then(response => {
    response.data.map(function(element) {
        products.push(element)
      });
}).catch(error => {
    console.log(error)
})


export default products;
