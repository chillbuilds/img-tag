const fs = require('fs')

const dirArr = ['C:/Users/Master William/Desktop/', 'C:/Users/Master William/Downloads/']
const imgPre = ['jpg','jpeg','gif','tiff','bmp','pdf','raw']
var imgArr = []

for(var i = 0; i < dirArr.length; i++){
    let fileArr = []
    fs.readdirSync(dirArr[i]).forEach(file => {
        fileArr.push(file)
      })
    for(var j = 0; j < fileArr.length; j++){
        let x = fileArr[j].split('.')
        for(var k = 0; k < imgPre.length; k++){
            if(x[x.length-1] == imgPre[k]){
                imgArr.push(fileArr[j])
            }
        }
    }
}

console.log(imgArr.length)