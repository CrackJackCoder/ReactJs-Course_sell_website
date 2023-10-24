import "./MyShimer.css"
function Shimer() {
    return (
        // <div className="border shadow rounded-md p-3 w-[300px] h-[370px] mx-auto bg-slate-200">
        //     <div className="animate-pulse flex flex-col space-x-4">
        //         <div className="rounded-lg bg-slate-700 h-[200px]"></div>
        //         <div className="flex-1 space-y-6 py-1 flex flex-col gap-5">
        //             <div className="h-2 bg-slate-700 rounded"></div>
        //             <div className="space-y-3">
        //                 <div className="grid grid-cols-3 gap-4">
        //                     <div className="h-2 bg-slate-700 rounded col-span-2"></div>
        //                     <div className="h-2 bg-slate-700 rounded col-span-1"></div>
        //                 </div>
        //                 <div className="h-2 bg-slate-700 rounded"></div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="mydiv">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Shimer;