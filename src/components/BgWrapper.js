const BgWrapper = ({children}) => {
    return(
    <div className="relative h-screen w-screen bg-[#040d21] overflow-hidden flex items-center justify-center">
        <div className="absolute -bottom-36 -right-36 h-[300px] w-[300px] bg-pink-500 rounded-full blur-[170px]"></div>
        <div className="absolute -left-36 -top-36 h-[300px] w-[300px] bg-blue-500 rounded-full blur-[170px]"></div>
        <div className="absolute -top-36 -right-36 h-[300px] w-[300px] bg-blue-500 rounded-full blur-[170px]"></div>
        <div className="flex items-center justify-center h-screen w-screen gap-10 py-10 px-6">
        {children}
        </div>
    <div id="space">
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
    </div>
    </div>
    )
}

export default BgWrapper