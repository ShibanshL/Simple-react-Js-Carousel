import React, { Component } from 'react'
import './Carousel.css'
import  {a,b,c} from './Buttons'
export default class Carousel extends Component {

  componentDidMount(){
    a()
    b()
    c()
  }


  render() {
    return (
      <div className='Carousel_main'>
          <div className='carousel_sub'>
              <div className='Images'>
                  <div className='I1'>
                      <img src='/Images/1.jpg' />
                  </div>
                  <div className='I2'>
                      <img src='/Images/2.jpg' />
                  </div>
                  <div className='I3'>
                      <img src='/Images/3.jpg' />
                  </div>
                  <div className='I4'>
                      <img src='/Images/4.jpg' />
                  </div>
                  <div className='I5'>
                      <img src='/Images/5.jpg' />
                  </div>

              </div>
              <div className='Button'>
                  <div className='B1'></div>
                  <div className='B2'></div>
                  <div className='B3'></div>
                  <div className='B4'></div>
                  <div className='B5'></div>
              </div>
          </div>
          <div className='Nav'>
              <div className='left'>
                  <img src='https://th.bing.com/th/id/R.74dcd756662d4b6a011dec33a921a249?rik=CayMhRy5eTUBww&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_531.png&ehk=rgirxRVbRBZNlC%2b%2fHXkt6mGge2X%2bJS3twpYJ0jvf%2fgQ%3d&risl=&pid=ImgRaw&r=0' />
              </div>
              <div className='right'>
                    <img src='https://th.bing.com/th/id/R.74dcd756662d4b6a011dec33a921a249?rik=CayMhRy5eTUBww&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_531.png&ehk=rgirxRVbRBZNlC%2b%2fHXkt6mGge2X%2bJS3twpYJ0jvf%2fgQ%3d&risl=&pid=ImgRaw&r=0' />
              </div>
          </div>
      </div>
    )
  }
}
