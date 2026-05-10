import Header from "../components/header";


export default function meaningsPage(){
    return (
        <div className="flex flex-col flex-1 items-center justify-center text-black bg-white font-sans">
            <Header></Header>
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 text-black sm:items-start">
                <h1>meaning</h1>
            </main>
        </div>
    );
}