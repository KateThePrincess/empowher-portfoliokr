const Hero = () => {
  return (
    <>
      <div className='hero-container'>
        {/* <div className='hero-img' /> */}
        {/* <div className='hero-img' style={{ background: 'black', opacity: 1 }}> */}
        <div className='hero-center'>
          <h1>
            Ignite Your Inner <span className='single-word'> Flame</span>
            <br /> and Shine.
          </h1>
          <p>
            Empowering Women to Unleash Their Infinite Potential and Lead with
            Passion.
          </p>
          <div className='btn-hero-container'>
            <button className='btn'>find more</button>
            <button className='btn'>contact us</button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};
export default Hero;
