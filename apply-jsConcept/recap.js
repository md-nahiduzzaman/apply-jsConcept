var time = '10:15pm';
var bookPrice = 150;
var isWhiteColor = true;

var partners = [ 'sajid', 'mojid'];
var elementCount = partners.length;
var mojidIndex  = partners.indexOf('mojid');
partners.push('kajit');
partners.pop()

if(bookPrice < 120){
    console.log('I will buy this book')
}
else{
    console.log('Negetave');
}

var i = 0
while(i <= 17){
    //do some
    i++;
}


for(var i = 0; i <= 18; i++;){

}


function isMoonUp(time){
    if(time >=19 && time <=5){
        return true;
    }
    return false;
}

var moonStatus = isMoonUp(21);