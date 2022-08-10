const resultContext = document.getElementById("result context");

const api = () => {
    var xhr = new XMLHttpRequest();
    var url = 'http://apis.data.go.kr/6460000/tourInfo/getTourlnfoList'; /*URL*/
    var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + 'tGzRTe4hFkBsplxnkyKO%2B5HiRgZxgHiEz1wTuNEI8oVrZxwK1Cly6McXVSTOiWjzu9S5v8sw02vxmLTnVXDA8g%3D%3D'; /*Service Key*/
    queryParams += '&' + encodeURIComponent('tourArea') + '=' + encodeURIComponent('목포'); /**/
    queryParams += '&' + encodeURIComponent('tourCategory') + '=' + encodeURIComponent('관광'); /**/
    queryParams += '&' + encodeURIComponent('pageSize') + '=' + encodeURIComponent('10'); /**/
    queryParams += '&' + encodeURIComponent('startPage') + '=' + encodeURIComponent('1'); /**/
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
    xhr.open('GET', url + queryParams);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            let result = this.responseXML;
            result = result.getElementsByTagName("list");

            for(let multiResult of result){
                for(let singleResult of multiResult.children){
                    console.log(singleResult);
                    resultContext.innerHTML += singleResult + '\n';
                }
            }
            
        }
    };

    xhr.send('');
}





api();