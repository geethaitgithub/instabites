import bgcontact from "../Images/bg_contactpage.jpg"

const Contact = () => {
    return (
        <div className=''>
        <div className='  relative ' >
            <div className=' absolute  w-full h-full flex flex-col justify-center bg-black/40 '>
                <h1 className='px-4 sm:text-2xl md:text-3xl lg:text-4xl  font-bold'> <span className=" text-white">Have Issue with Your Order?</span> </h1>
                <h1 className='px-4 sm:text-2xl md:text-3xl lg:text-4xl  font-bold'><span className=" text-orange-600">Call Us on +1 (619)-768-2780 or Visit Our Customer Support Section to
          Connect our customer Support Team.</span>   </h1>
            </div>
            <img className=' w-full object-cover max-h-[400px]' src={bgcontact} alt="/"></img>
        </div>
    </div>
    );
};
export default Contact;