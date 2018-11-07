import { shallow, mount, render } from 'enzyme';
import React from 'react';
import App from '../App.js';
import TopNav from '../components/Nav/TopNav.js';
import NavToolbar from '../components/Nav/NavToolbar.js';
import DropDowns from '../components/Nav/DropDowns.js'
import fetch from 'jest-fetch-mock';
import axios from 'axios';


const sampleData = [
	{
		"id": 0,
		"imageUrl": [
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/1.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/10.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/11.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/12.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/2.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/2gf_5vW49h0.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/3.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/4.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/5.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/6.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/7.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/8.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/9.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/9ZeOXrR0Ffs.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/APGl9xqpTDs.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/CswKfD546Z8.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/GEhaPt3niJs.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/GcHar4P8V_Q.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/HBxRMMqYxeQ.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/I6yRI5OcAwU.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/JaXs8Tk5Iww.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/NwBx723XaHw.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/OI3BVhWoli0.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/PzwbYT4qsHk.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/SH0iJ3DgeAY.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/T6Wbmgs87D0.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/TORI6YW1fHE.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/Uh7B6L8ZIeg.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/V3KpDE4WlW8.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/X6UzmQlPanM.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/YUTHEaYxzUU.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/Zz6GqtcRSqA.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/i5wk7pPTarY.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/jENOrTpc8Ug.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/nBuiLbz_j4A.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/qJMAshiwvas.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/qZSmC5OsFm4.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/uYw3xYkF9jw.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/vElTvnQVNA4.jpg",
			"https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/wd0Cduvio9s.jpg"
		],
		"address": "2967 Skylar Rest",
		"zipcode": "13460-3361",
		"city": "North Ceasar",
		"State": "Virginia"
  },
];

jest.mock('axios', () => {
  const sampleData = [
    {
      "id": 0,
      "imageUrl": [
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/1.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/10.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/11.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/12.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/2.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/2gf_5vW49h0.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/3.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/4.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/5.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/6.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/7.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/8.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/9.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/9ZeOXrR0Ffs.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/APGl9xqpTDs.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/CswKfD546Z8.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/GEhaPt3niJs.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/GcHar4P8V_Q.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/HBxRMMqYxeQ.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/I6yRI5OcAwU.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/JaXs8Tk5Iww.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/NwBx723XaHw.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/OI3BVhWoli0.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/PzwbYT4qsHk.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/SH0iJ3DgeAY.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/T6Wbmgs87D0.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/TORI6YW1fHE.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/Uh7B6L8ZIeg.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/V3KpDE4WlW8.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/X6UzmQlPanM.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/YUTHEaYxzUU.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/Zz6GqtcRSqA.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/i5wk7pPTarY.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/jENOrTpc8Ug.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/nBuiLbz_j4A.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/qJMAshiwvas.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/qZSmC5OsFm4.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/uYw3xYkF9jw.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/vElTvnQVNA4.jpg",
        "https://s3-us-west-1.amazonaws.com/homedetails/houseSample1/wd0Cduvio9s.jpg"
      ],
      "address": "2967 Skylar Rest",
      "zipcode": "13460-3361",
      "city": "North Ceasar",
      "State": "Virginia"
    },
  ];
  return {
    get: jest.fn(() => Promise.resolve(sampleData).catch(()=> console.log('hi'))),
  };
});

// END TO END TEST 
describe('App', () => {

  // fetch.mockResponse(sampleData);

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('it should exist', () => {
    expect(wrapper.exists()).toBe(true);
  });
  
  test('should contain the necessary components', async () => {
    const wrapper = mount(<App />)
    await wrapper.instance().componentDidMount();
    expect(axios.get).not.toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith('local:host')
    // console.log(wrapper.html())
    
    // console.log('msg', wrapper.find('TopNav').prop())
    // expect(wrapper.update().find('TopNav').length).toBe(1)
    // expect(wrapper.find('#loading-page').length).toBe(1);
    // expect(wrapper.find('TopNav').length).toBe(1);
  })
});



// describe('TopNav', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = shallow(<TopNav />)
//   });

//   test('should contain two main section that contains the necessary number of headers: ', () => {
//       // expect(wrapper.find('#nav-top-main-right').length).toBe(1);
//       expect(wrapper.find(DropDowns).length).toBe(6);
//     })

//   test('', () => {
//     wrapper.find(DropDowns).simulate("click");
//     wrapper.update();
//     expect(wrapper.find(DropDowns).length).toBe(6);
//   })
// })


// describe('Toolbar', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = mount(<NavToolbar />)
//   });

//   test('should contain two main section that contains the necessary number of headers: ', () => {
//     (async () => {
//       await flushPromises();
//       wrapper.update();
//       expect(wrapper.find('.Nav-top-bar-header').length).toBe(10);
//       expect(wrapper.find('nav-top-main-right').length).toBe(10);
//     })();
//   });

// })