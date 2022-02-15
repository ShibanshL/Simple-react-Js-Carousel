

 export function a(){
    var B1 = document.querySelector('.Carousel_main .carousel_sub .Button .B1')
    var B2 = document.querySelector('.Carousel_main .carousel_sub .Button .B2')
    var B3 = document.querySelector('.Carousel_main .carousel_sub .Button .B3')
    var B4 = document.querySelector('.Carousel_main .carousel_sub .Button .B4')
    var B5 = document.querySelector('.Carousel_main .carousel_sub .Button .B5')
    var Images = document.querySelector('.Carousel_main .carousel_sub .Images')

    B1.onclick = () =>{
        B1.style.width = '18px'
        B1.style.background = 'black'
        Images.style.marginLeft='0vw'


        B2.style.width='8px'
        B2.style.background = 'rgba(0,0,0,0.5)'

        B3.style.width='8px'
        B3.style.background = 'rgba(0,0,0,0.5)'

        B4.style.width='8px'
        B4.style.background = 'rgba(0,0,0,0.5)'

        B5.style.width='8px'
        B5.style.background = 'rgba(0,0,0,0.5)'

    }

    B2.onclick = () =>{
        B2.style.width = '18px'
        B2.style.background = 'black'
        Images.style.marginLeft='-100vw'


        B1.style.width='8px'
        B1.style.background = 'rgba(0,0,0,0.5)'

        B3.style.width='8px'
        B3.style.background = 'rgba(0,0,0,0.5)'

        B4.style.width='8px'
        B4.style.background = 'rgba(0,0,0,0.5)'

        B5.style.width='8px'
        B5.style.background = 'rgba(0,0,0,0.5)'

    }

    B3.onclick = () =>{
        B3.style.width = '18px'
        B3.style.background = 'black'
        Images.style.marginLeft='-200vw'


        B1.style.width='8px'
        B1.style.background = 'rgba(0,0,0,0.5)'

        B2.style.width='8px'
        B2.style.background = 'rgba(0,0,0,0.5)'

        B4.style.width='8px'
        B4.style.background = 'rgba(0,0,0,0.5)'

        B5.style.width='8px'
        B5.style.background = 'rgba(0,0,0,0.5)'

    }

    B4.onclick = () =>{
        B4.style.width = '18px'
        B4.style.background = 'black'
        Images.style.marginLeft='-300vw'


        B1.style.width='8px'
        B1.style.background = 'rgba(0,0,0,0.5)'

        B2.style.width='8px'
        B2.style.background = 'rgba(0,0,0,0.5)'

        B3.style.width='8px'
        B3.style.background = 'rgba(0,0,0,0.5)'

        B5.style.width='8px'
        B5.style.background = 'rgba(0,0,0,0.5)'

    }

    B5.onclick = () =>{
        B5.style.width = '18px'
        B5.style.background = 'black'
        Images.style.marginLeft='-400vw'


        B1.style.width='8px'
        B1.style.background = 'rgba(0,0,0,0.5)'

        B2.style.width='8px'
        B2.style.background = 'rgba(0,0,0,0.5)'

        B3.style.width='8px'
        B3.style.background = 'rgba(0,0,0,0.5)'

        B4.style.width='8px'
        B4.style.background = 'rgba(0,0,0,0.5)'

    }
}

export function b(){
   
    var Images = document.querySelector('.Carousel_main .carousel_sub .Images')
    var i=0
    setInterval(()=>{
        // Images.style.marginLeft='-100vw'
       if(i<400){ 
        i=i+100
        // console.log(i)
        Images.style.marginLeft='-'+i+'vw'       
       }
       else{
           i=-100
       }
      
    },
    4000)
}

export function c(){
    var B1 = document.querySelector('.Carousel_main .carousel_sub .Button .B1')
    var B2 = document.querySelector('.Carousel_main .carousel_sub .Button .B2')
    var B3 = document.querySelector('.Carousel_main .carousel_sub .Button .B3')
    var B4 = document.querySelector('.Carousel_main .carousel_sub .Button .B4')
    var B5 = document.querySelector('.Carousel_main .carousel_sub .Button .B5')
    var Images = document.querySelector('.Carousel_main .carousel_sub .Images')
    var j = Images.style.marginLeft
    console.log('Margin = '+j)
    var i=0
    setInterval(()=>{
        // Images.style.marginLeft='-100vw'
       i=i+100
       if(i<500){ 
           if(i==0){
            B1.style.width = '18px'
            B1.style.background = 'black'
    
            B2.style.width='8px'
            B2.style.background = 'rgba(0,0,0,0.5)'
    
            B3.style.width='8px'
            B3.style.background = 'rgba(0,0,0,0.5)'
    
            B4.style.width='8px'
            B4.style.background = 'rgba(0,0,0,0.5)'
    
            B5.style.width='8px'
            B5.style.background = 'rgba(0,0,0,0.5)'
           }
            else if(i==100){
                B2.style.width = '18px'
                B2.style.background = 'black'
        
                B1.style.width='8px'
                B1.style.background = 'rgba(0,0,0,0.5)'
        
                B3.style.width='8px'
                B3.style.background = 'rgba(0,0,0,0.5)'
        
                B4.style.width='8px'
                B4.style.background = 'rgba(0,0,0,0.5)'
        
                B5.style.width='8px'
                B5.style.background = 'rgba(0,0,0,0.5)'
            }
            else if(i==200){
                B3.style.width = '18px'
                B3.style.background = 'black'
        
                B1.style.width='8px'
                B1.style.background = 'rgba(0,0,0,0.5)'
        
                B2.style.width='8px'
                B2.style.background = 'rgba(0,0,0,0.5)'
        
                B4.style.width='8px'
                B4.style.background = 'rgba(0,0,0,0.5)'
        
                B5.style.width='8px'
                B5.style.background = 'rgba(0,0,0,0.5)'
        
            }
            else if(i==300){
                B4.style.width = '18px'
                B4.style.background = 'black'
        
                B1.style.width='8px'
                B1.style.background = 'rgba(0,0,0,0.5)'
        
                B2.style.width='8px'
                B2.style.background = 'rgba(0,0,0,0.5)'
        
                B3.style.width='8px'
                B3.style.background = 'rgba(0,0,0,0.5)'
        
                B5.style.width='8px'
                B5.style.background = 'rgba(0,0,0,0.5)'
            }
            else if(i==400){
                B5.style.width = '18px'
                B5.style.background = 'black'
        
                B1.style.width='8px'
                B1.style.background = 'rgba(0,0,0,0.5)'
        
                B2.style.width='8px'
                B2.style.background = 'rgba(0,0,0,0.5)'
        
                B3.style.width='8px'
                B3.style.background = 'rgba(0,0,0,0.5)'
        
                B4.style.width='8px'
                B4.style.background = 'rgba(0,0,0,0.5)'
            }
            else{
                B1.style.width = '18px'
                B1.style.background = 'black'
        
        
                B2.style.width='8px'
                B2.style.background = 'rgba(0,0,0,0.5)'
        
                B3.style.width='8px'
                B3.style.background = 'rgba(0,0,0,0.5)'
        
                B4.style.width='8px'
                B4.style.background = 'rgba(0,0,0,0.5)'
        
                B5.style.width='8px'
                B5.style.background = 'rgba(0,0,0,0.5)'
            }
       }
       
       else{
           i=-100
       }
      
    },
    4000)

}