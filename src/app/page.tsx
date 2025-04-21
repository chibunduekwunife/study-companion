
import {
    ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/solid'
import FileUpload from "@/app/components/upload";

export default function Home () {
    return (
        <div>
            <div className='flex flex-col items-center m-auto mt-30 w-fit gap-10'>
                <div className='rounded-full shadow-md border-1/2 py-1.5 px-4'>
                    <p className='italic'>
                        Powered by
                        <span className='font-bold'> Open AI mini o3</span> and
                        <span className='font-bold'> mini o4</span> models
                    </p>
                </div>
                <div className='flex flex-col items-center gap-5'>
                    <h1 className='text-center'>
                        Your Study
                        <span className='font-bold text-primary'> Buddy
                    </span>
                    </h1>
                    <p className='w-[60%] text-center text-secondary'>
                        Attach your school notes or paste them in directly and select the academic
                        level you wish to be taught and quizzed at to generate a study buddy
                        tailored to your needs
                    </p>
                </div>
                <div className='flex flex-col lg:flex-row gap-2'>
                    <FileUpload />
                    {/*<select>*/}
                    {/*    <option>Elementary School</option>*/}
                    {/*    <option>Middle School</option>*/}
                    {/*    <option>High School</option>*/}
                    {/*    <option>College</option>*/}
                    {/*    <option>Undergraduate</option>*/}
                    {/*    <option>Graduate</option>*/}
                    {/*</select>*/}
                    <button className='flex justify-center text-center
                items-center gap-1'>
                        <p className=''>Launch Sage</p>
                        <ArrowTopRightOnSquareIcon className='size-5'/>
                    </button>
                </div>


            </div>
        </div>
    )
}
