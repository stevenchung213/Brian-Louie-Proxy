// import Slider from 'react-slick';
// import Lightbox from 'react-image-lightbox';
// import React from 'react';

// export default class Sliders extends React.Component{
//   constructor(props){
//     super(props);

//     this.state = {
//       images: [	
//         "https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg",
//         "https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg",
//         "https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg",
//         "https://s3.amazonaws.com/uifaces/faces/twitter/jeremiaha/128.jpg"
//       ],
//       current: ''
//     }
//   }

//   getSliderSettings(){
//    return {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//    }
//   }

//   handleClickImage(e, image) {

//    this.setState({
//      current: image
//    })
//   }

//   handleCloseModal() {

//    this.setState({
//      current: ''
//    })
//   }

//   render(){
//    const settings = this.getSliderSettings();
//    const { images, current } = this.state;

//    return (
//      <div>
//       <Slider {...settings}>
//         { images.map(image => (
//            <img src={image} onClick={ e => this.handleClickImage(e, image)}  />

//         ))} 
//       </Slider>

//       {current &&
//          <Lightbox
//             mainSrc={current}
//             onCloseRequest={this.handleCloseModal}
//             />
//       }
//     </div>
//    )
//   }
// }