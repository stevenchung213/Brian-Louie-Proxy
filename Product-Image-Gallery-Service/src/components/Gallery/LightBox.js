// import React from 'react';
// import Lightbox from 'react-image-lightbox';
// // import 'react-image-lightbox/style.css';

// const captions = [
//   'New Construction: $3,328,000 (4 beds, 4 baths, 4,142 sqft)'
// ]

// export default class LightBox extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		console.log('props is ', props)
// 		this.state = {
// 			index: props.index,
// 			isOpen: props.isOpen,
// 			images: props.img
// 		};
// 	}


// 	render() {
// 		const { photoIndex, isOpen, images, index } = this.state;
// 		// const nextIndex = (photoIndex + 1) % images.length;
// 		// const prevIndex = (photoIndex + images.length - 1) % images.length;

// 		return (
// 			<div>
// 			  {/* <button type="button" onClick={() => this.setState({ isOpen: true })}>
// 			    Open Lightbox
// 			  </button> */}
// 			  {
// 					isOpen && 
// 					<Lightbox mainSrc={images[index]} 
// 										nextSrc={images[(index + images.length + 1 ) % images.length]}
// 										prevSrc={images[(index + images.length - 1) % images.length]}
// 										onMovePrevRequest={() => 
// 											this.setState({
// 												index: (index + images.length - 1) % images.length
// 											})}
// 										onMoveNextRequest={() => 
// 											this.setState({
// 												index: (index + images.length + 1) % images.length
// 											})}
// 										onCloseRequest={() => this.setState({ isOpen: false })}
// 										imageTitle={`${index + 1} of ${images.length}`}
// 										imageCaption={captions[0]}
// 					/>
//           }
// 			</div>
// 		)
// 	}
// }