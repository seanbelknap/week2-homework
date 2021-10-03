document.addEventListener("DOMContentLoaded", function(){

    var imageArray = [
        "https://m.media-amazon.com/images/S/abs-image-upload-na/a/AmazonStores/ATVPDKIKX0DER/f4e40f471a312c71eaad802316393c89.w1280.h640._CR0%2C0%2C1280%2C640_SX750_SY375_.jpg",
        "https://logodix.com/logo/1301260.jpg",
        "https://s.hdnux.com/photos/01/21/04/64/21253384/5/rawImage.jpg",
        "http://cdn.shopify.com/s/files/1/0271/7209/articles/death_wish_coffee_bundle_set_feature.jpg?v=1611170558",
        "https://pbs.twimg.com/media/BnM5XelCQAEqBFP.jpg",
        "https://cdn.shopify.com/s/files/1/0271/7209/files/2020-death-wish-mug-close-up.jpg?v=1578321141",

    ];

    // const variable = () => { }
    // function variable(){}
    // const = function variable() {}

    let imageArrayIndex = 0;
    let timeOut = 0;
    // imgHolder.src = imageArray[imageArrayIndex];
    function delay (){
        setTimeout(() => delayPicture(), timeOut);
    }


    const delayPicture = () => {
        const lastIndex = imageArray.length - 1;

        if (lastIndex === imageArrayIndex) {
            imgHolder.src = imageArray[imageArrayIndex];
            

        } else {
            imgHolder.src = imageArray[imageArrayIndex];
            // insert property of transition here
            // imgHolder.style.transform = "translateX(-2500)";
            timeOut = 3000;
            imageArrayIndex++;
            delay();
        }
            
    }
    
    delay();

        var leftButton = document.querySelector("#leftButton");
        var rightButton = document.querySelector("#rightButton");
        var imgHolder = document.getElementById("imgHolder");
        //0
        imgHolder.src = imageArray[imageArrayIndex];

        rightButton.addEventListener("click", function(){
            if(imageArrayIndex < imageArray.length -1){
                imageArrayIndex++; //increment 0 to 1
                
                imgHolder.src = imageArray[imageArrayIndex]; // src = imageArray[1]
            }
            else{
                console.log("Out of Bounds on Right button!")
            }
        })

        leftButton.addEventListener("click", function(){
            if(imageArrayIndex > 0){
                imageArrayIndex--; // increment 1 to 0
                imgHolder.src = imageArray[imageArrayIndex]; // src = imageArray[1]
            }
            else{
                console.log("Out of Bounds on left button!")
            }
    })
 



})