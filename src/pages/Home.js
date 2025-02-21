import React from 'react';
import VideoSection from '../components/VideoSection';
// import Footer from '../components/Footer';
import { useSpring, animated } from 'react-spring';

function Home () {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <VideoSection/>
      {/* <Footer/> */}
    </animated.div>
  );
  // return (
  //   <>
  //     <VideoSection/>
  //     <Footer/>
  //   </>
  // )
}

export default Home;