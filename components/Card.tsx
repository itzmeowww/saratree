import { AiOutlineClose, AiFillRead, AiOutlineLink } from "react-icons/ai"
import StyledFilledButton from "./StyledDarkButton"
const Card = ({ learned, showCard, hideCard, currentConcept, onCheckboxChange, currentConceptId }) => {
    return <div className={`transition-all ease-in-out top-0 left-0 h-screen w-full fixed z-10 flex-col justify-center items-center ${showCard ? 'flex' : 'hidden'}`} >
        <div className='absolute bg-black opacity-5 w-full h-full' onClick={hideCard}>

        </div>
        <div className='relative bg-white border rounded-md border-blue-900 w-3/4 h-3/4 max-w-sm max-h-96 opacity-95 flex flex-col justify-start items-center gap-2 py-4 px-4 md:px-10 shadow-md'>
            <button className='absolute -right-3 -top-3 bg-white border rounded-full p-1 border-blue-900 text-blue-900' onClick={hideCard}> <AiOutlineClose /></button>
            <h1 className='text-xl font-bold border-b border-blue-900 pb-1 px-4 text-center'>{currentConcept}</h1>

            <div className="relative shadow-inner h-80 rounded-sm overflow-x-auto w-full flex flex-col items-center justify-center">
                <div className=" flex items-center justify-center gap-3">
                    <div className=''>
                        <a href="lesson/demo"><StyledFilledButton label="Watch Lesson" /></a>
                    </div>
                    <div className='text-sm border border-blue-800 rounded-md py-1 px-2' >
                        <input id='learned' type="checkbox" checked={learned} className='mr-2' onChange={(e) => onCheckboxChange(e, currentConceptId)}>
                        </input>
                        <label htmlFor="learned">Learned</label>
                    </div>

                </div>
                <div className="w-3/4 mt-3">
                    <div className='flex items-center w-full'>
                        <AiFillRead className='mr-2' />
                        <h2 className='text-lg font-semibold'>
                            Material
                        </h2>
                    </div>
                    <ul className="list-disc ml-4 text-sm w-full ">
                        <li className=''>  <a href="" className='truncate text-blue-600 underline' >What is {currentConcept}</a></li>
                        <li className=''>  <a href="" className='truncate text-blue-600 underline' >Further reading about {currentConcept}</a></li>
                        <li className=''>  <a href="" className='truncate text-blue-600 underline' >Practice problems {currentConcept}</a></li>
                    </ul>
                </div>
            </div>

        </div>
    </div >
}

export default Card