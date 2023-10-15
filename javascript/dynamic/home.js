const url = "http://3.17.216.66:4000/location "

const getCity = async () => {
    let response = await fetch(`${url}`,{method:'GET'})
    let data = await response.json()
    data.map((item) => {
        let element = document.createElement('option') //<option></option>
        let text = document.createTextNode(item.state) //delhi
        element.appendChild(text) //<option>Delhi</option>
        document.getElementById('city').appendChild(element) 
    })
}


// const getCity = () => {
//     fetch(`${url}`,{method:'GET'})
//     .then((res) => res.json())
//     .then((data) => {
//         data.map((item) => {
//             let element = document.createElement('option') //<option></option>
//             let text = document.createTextNode(item.state) //delhi
//             element.appendChild(text) //<option>Delhi</option>
//             document.getElementById('city').appendChild(element) 
//             //<select><option>City</option></select>
//         })
//     })
// }