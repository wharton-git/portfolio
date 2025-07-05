import AnimatedPage from "../animation/AnimatedPage"

const Box = ({ children }) => {
    return (
        <AnimatedPage>
            <div className='pt-17 p-5 h-screen w-screen flex items-center justify-center gap-4 overflow-y-scroll'>
                {children}
            </div>
        </AnimatedPage>
    )
}

export default Box