import React from 'react';
import { Carousel } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';

const captions = [
  'New Construction: $3,328,000 (4 beds, 4 baths, 4,142 sqft)'
];

export default class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: '',
      isOpen: false,
      photoIndex: 0,
      direction: null,
      profile: null || props.img[0],
      images: null || props.img.slice(0, 25)
    }
    // console.log('Gallery props is ', props);
    // console.log('Gallery-images is ', this.state.images)
  };

  handleClick(selectedIndex, e) {
    console.log(`selected=${selectedIndex} direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  handleClickImage(e, photoIndex) {
    e && e.preventDefault();
    this.setState({
      isOpen: true,
      photoIndex: photoIndex
    })
    console.log('index is ', this.state.index)
  }

  render() {
    const { isOpen, index, direction, images, profile, photoIndex} = this.state;
    return (
      <Carousel 
        interval={null} 
        indicators={false} 
        activeIndex={index}
        prevIcon={index === 0 ? false : console.log('trolled')}
        nextIcon={index === 1 ? false : console.log('trolled')}
        direction={direction}
        onSelect={this.handleClick.bind(this)}
      >
        <Carousel.Item>
          <div className="img-container">
            <div className="main-profile">
                <img className="home-profile-image" alt="house" 
                  src={profile}
                  onClick={e => this.handleClickImage(e, 0)}
                />
                  {
                    isOpen && 
                    <Lightbox mainSrc={photoIndex === 0 ? profile : images[photoIndex]} 
                              nextSrc={images[(photoIndex + images.length + 1 ) % images.length]}
                              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                              onMovePrevRequest={() => 
                                this.setState({
                                  photoIndex: (photoIndex + images.length - 1) % images.length
                                })}
                              onMoveNextRequest={() => 
                                this.setState({
                                  photoIndex: (photoIndex + images.length + 1) % images.length
                                })}
                              onCloseRequest={() => this.setState({ isOpen: false })}
                              imageTitle={`${photoIndex + 1} of ${images.length}`}
                              imageCaption={captions[0]}
                    />
                  }   
            </div>
            <div className="img-side-pictures-container">
              { 
                images.slice(1).map((image, i) => (
                  <div className="home-children-pictures" key={i}>
                    <img className="gallery-images" alt="house" src={image} 
                      onClick={e => this.handleClickImage(e, i + 1)} 
                    />
                  </div>
                ))
              }
            </div>                      
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="img-container">
            <div className="img-side-pictures-container">
            { 
                images.slice(9).map((image, i) => (
                  <div className="home-children-pictures" key={i}>
                    <img className="gallery-images" alt="house" src={image} 
                      onClick={e => this.handleClickImage(e, i + 9)} 
                    />
                  </div>
                ))
              }
            </div>                      
          </div>
        </Carousel.Item> 
      </Carousel>
    )
  }
};


// render() {
//   const { isOpen, current, index, direction, images, firstSlide, profile } = this.state;
//   return (
//     <Carousel 
//       interval={null} 
//       indicators={false} 
//       activeIndex={index}
//       prevIcon={index === 0 ? false : console.log('trolled')}
//       nextIcon={index === 1 ? false : console.log('trolled')}
//       direction={direction}
//       onSelect={this.handleClick.bind(this)}
//     >
//       <Carousel.Item>
//         <div className="img-container">
//           <div className="main-profile">
//               <img className="home-profile-image" alt="house" 
//                 src={profile}
//                 onClick={e => this.handleClickImage(e, 0)}
//               />
//                 {
//                   isOpen && 
//                   <Lightbox mainSrc={images[index]} 
//                             nextSrc={images[(index + images.length + 1 ) % images.length]}
//                             prevSrc={images[(index + images.length - 1) % images.length]}
//                             onMovePrevRequest={() => 
//                               this.setState({
//                                 index: (index + images.length - 1) % images.length
//                               })}
//                             onMoveNextRequest={() => 
//                               this.setState({
//                                 index: (index + images.length + 1) % images.length
//                               })}
//                             onCloseRequest={() => this.setState({ isOpen: false })}
//                             imageTitle={`${index + 1} of ${images.length}`}
//                             imageCaption={captions[0]}
//                   />
//                 }
//           </div>
//           <div className="img-side-pictures-container">
//             { 
//               firstSlide.map((image, i) => (
//                 <div className="home-children-pictures" key={i}>
//                   <img className="gallery-images" alt="house" src={image} 
//                     // onClick={e => {console.log('i is ', i)}}
//                     onClick={e => this.handleClickImage(e, i)} 
//                   />
//                   {
//                   isOpen && 
//                   <Lightbox mainSrc={images[index]} 
//                             mainSrcThumbnail={images[index]}
//                             nextSrc={images[(index + images.length + 1 ) % images.length]}
//                             prevSrc={images[(index + images.length - 1) % images.length]}
//                             onMovePrevRequest={() => 
//                               this.setState({
//                                 index: (index + images.length - 1) % images.length
//                               })}
//                             onMoveNextRequest={() => 
//                               this.setState({
//                                 index: (index + images.length + 1) % images.length
//                               })}
//                             onCloseRequest={() => this.setState({ isOpen: false })}
//                             imageTitle={`${index + 1} of ${images.length}`}
//                             imageCaption={captions[0]}
//                   />
//                 }
//                 </div>
//               ))
//             }
//           </div>                      
//         </div>
//       </Carousel.Item>
//       {/* <Carousel.Item>
//         <div className="img-container">
//           <div className="img-side-pictures-container">
//           { 
//               images.map((image, i) => (
//                 <div className="home-children-pictures" key={i}>
//                   <img className="gallery-images" alt="house" src={image} 
//                     // onClick={e => {console.log('i is ', i)}}
//                     onClick={e => this.handleClickImage(e, i)} 
//                   />
//                   {
//                   isOpen && 
//                   <Lightbox mainSrc={images[index]} 
//                             mainSrcThumbnail={images[index]}
//                             nextSrc={images[(index + images.length + 1 ) % images.length]}
//                             prevSrc={images[(index + images.length - 1) % images.length]}
//                             onMovePrevRequest={() => 
//                               this.setState({
//                                 index: (index + images.length - 1) % images.length
//                               })}
//                             onMoveNextRequest={() => 
//                               this.setState({
//                                 index: (index + images.length + 1) % images.length
//                               })}
//                             onCloseRequest={() => this.setState({ isOpen: false })}
//                             imageTitle={`${index + 1} of ${images.length}`}
//                             imageCaption={captions[0]}
//                   />
//                 }
//                 </div>
//               ))
//             }
//           </div>                      
//         </div>
//       </Carousel.Item>  */}
//     </Carousel>
//   )
// }