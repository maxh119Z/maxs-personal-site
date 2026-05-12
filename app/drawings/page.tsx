import Header from "../components/header_hobbes";
import Footer from "../components/footer"

export default function drawingsPage(){
    return (
        <div className="flex flex-col flex-1 items-center text-black bg-white font-sans">
            <section className=" flex min-h-screen w-full flex-col">
                <Header></Header>
                <main className="relative w-full flex-1 px-5">
                    <div className="absolute bottom-0 left-10 right-10 flex items-end gap-0">
                        {/* <div className="aspect-5/3 w-[25%] text-center"><p className="mt-2 text-xl  mb-3">people</p><img src="drawing/eye_good.jpg" alt="eyes" className="h-full w-full object-cover" /></div>
                        <div className="aspect-4/3 w-[25%] text-center"><p className="mt-2 text-xl  mb-3">arts</p><img src="drawing/long_good.jpg" alt="flowers hana-bi" className="h-full w-full object-cover" /></div>
                        <div className="aspect-3/4 w-[25%] text-center"><p className="mt-2 self-center text-xl mb-3">other</p><img src="drawing/other3.jpg" alt="balls" className="h-full w-full object-cover" /></div>
                        <div className="aspect-3/5 w-[25%] text-center"><p className="mt-2 self-center text-xl mb-3">ipad</p><img src="drawing/ipad1.jpg" alt="ghibli heron" className="h-full w-full object-cover" /></div> */}
                        <div className="aspect-5/3 w-[25%] text-center"><img src="drawing/eye_good.jpg" alt="eyes" className="h-full w-full object-cover" /></div>
                        <div className="aspect-4/3 w-[25%] text-center"><img src="drawing/long_good.jpg" alt="flowers hana-bi" className="h-full w-full object-cover" /></div>
                        <div className="aspect-10/12 w-[25%] text-center"><img src="drawing/other3.jpg" alt="balls" className="h-full w-full object-cover" /></div>
                        <div className="aspect-7/10 w-[25%] text-center"><img src="drawing/ipad1.jpg" alt="ghibli heron" className="h-full w-full object-cover" /></div>
                    </div>
                    
                </main>
            </section>

            <div className="w-2/3 mt-45 mb-10 border border-gray-400"></div>

            <div className="w-2/3 px-10 grid grid-cols-3 items-center text-center">
                {/* <div className="flex flex-col items-center">
                    <p className="mt-2 text-xl mb-3">1. people</p>
                    <p className="mt-2 text-xl mb-3">2. arts</p>
                </div> */}

                <div className="flex justify-center items-center">
                    <h1 className="text-3xl font-bold">Gallery!</h1>
                </div>

                {/* <div className="flex flex-col items-center">
                    <p className="mt-2 text-xl mb-3">3. other</p>
                    <p className="mt-2 text-xl mb-3">4. ipad</p>
                </div> */}
            </div>

            <div className="w-2/3 mt-10 border border-gray-400 mb-45"></div>
            <Footer/>
        </div>
    );
}