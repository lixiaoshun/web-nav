// export default {
  const jsonp = ( url, data, successcallback)=>{
    let script = document.createElement("script");
    let jsonpCallback = "jsonpCallback" + ~~(Math.random() * 1000000);
    script.src = url + `?type=cb&q=${data}&cb=${jsonpCallback}`;
    document.body.appendChild(script);
    window[jsonpCallback] = function (res) {
      document.body.removeChild(script)
      // console.log(888)
      successcallback(res.AS.Results[0])
    }
  }
  
// }
export default {
  jsonp,
}