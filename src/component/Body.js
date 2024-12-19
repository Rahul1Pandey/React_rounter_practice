const Body=()=>{
    return (
    <div >
        <div className="flex justify-between my-16 px-28 ">
           <div className="w-4/12 h-auto">
            <img src="https://i.ibb.co/5BCcDYB/Remote2.png"></img>
           </div>
           <div>
               <div className="mr-10 mt-16 ">
                <h1 className="text-5xl  font-bold  ">Download Now</h1>
                <h1 className="text-3xl  font-bold text-right">Lorem Ipsum</h1>
               </div>
               <div className="my-8 text-right mr-10" >
                <button className="bg-red-700 text-white rounded-xl p-3 font-bold hover:bg-red-500">Download Now</button>
               </div>
           </div>
           
        </div>
        <div className="place-items-center mt-56 border-b-2">
            <div className="w-3/12  ">
            <img src="https://i.ibb.co/2M7rtLk/Remote1.png"></img>
            </div>
            <div>
                 <h1 className="text-5xl font-semibold  my-9">Lorem Ipsum Yojo</h1>
            </div>
        </div>
    </div>
    )
}

export default Body