// alert($(".rectangle1").css("height"));
var heightArray = [];
let selectionSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}

$(".sort").click(function(){

var newHeightArray = selectionSort(heightArray);
console.log(newHeightArray);
// for(var a=0;a<8;a++){
//
//
//
// }


var i = 0;                  //  set your counter to 1

function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    console.log(i);

    $(".rectangle"+(i+1)).text(newHeightArray[7-i]);

    $(".rectangle"+(i+1)).css("height",newHeightArray[7-i]);   //  your code here
    i++;                    //  increment the counter
    if (i < 8) {           //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another
    }                       //  ..  setTimeout()
  }, 1000)
}

myLoop();


//   var a = $(".rectangle1").css("height");
//   var b = $(".rectangle2").css("height");
//   var c = $(".rectangle3").css("height");
//   var max1,max2,max3;
//   if(a>b){
//       if(a>c){max1=a;
//       if(b>c){max2=b;max3=c;}
//       else{max2=c; max3=b;}
//
//      }
//       else{max1=c; max2=a; max3=b;}
//   }else if(b>c){
//       max1=b;
//       if(a>c){max2=a;max3=c;}
//       else{max2=c;max3=a;}
//   }else{max1=c;max2=b;max3=a;}
//
//   console.log(max1);
//   console.log(max2);
//   console.log(max3);
//   setTimeout(function(){ $(".rectangle1").css("height",max1);}, 100);
// setTimeout(function(){ $(".rectangle2").css("height",max2);}, 200);
// setTimeout(function(){   $(".rectangle3").css("height",max3);}, 300);



});


$(".reset").click(function(){

  for(var a=1;a<9;a++){
    var randomHeight = parseInt(Math.random()*400+100);
    console.log(randomHeight);
    heightArray.push(randomHeight);
    $(".rectangle"+a).css("height",randomHeight);
    $(".rectangle"+a).text(randomHeight);
  }


});
