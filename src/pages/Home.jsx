function Home() {
    return (
      <section>
        <div className="home-section" id="home">
          <div className="home-content mx-auto max-w-6xl px-4 py-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 home-header">
                <h1 className="text-3xl font-bold mb-4">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
  
                <h1 className="text-5xl font-bold max-w-[15ch] sm:max-w-[20ch] lg:max-w-[20ch] mt-5">
                  I'M
                  <strong className="main-name text-purple-700"> EDUARDO DALLABELLA LIMA</strong>
                </h1>
              </div>
  
              <img 
                src="/home/me.png" 
                alt="Imagem de Eduardo Dallabella Lima"
                className="w-50 h-50 object-cover rounded-full border-4 border-purple-700"
                />
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Home;
  