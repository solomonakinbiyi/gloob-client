function ParallaxBG({ url, children = "MERNCAMP" }) {
  return (
    <div
      className="container-fluid text-center"
      style={{
        backgroundImage: "url( " + url + " )",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        display: "block",
        textShadow: "2px 2px 8px #000",
        height: "150px",
      }}
    >
      <div className="" style={{display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'center'}}>
        <h1 className="font-weight-bold text-center">{children}</h1>
      </div>
    </div>
  );
}

export default ParallaxBG;
