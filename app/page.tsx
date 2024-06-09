import { Button } from '@/components/ui/button'
import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { DialogForm } from '@/components/mycomponents/DialogForm'
import Header from '@/components/mycomponents/Header'




function page() {
  return (
    <div>
      <SignedIn>
          <header className="border-b sticky">
                <Header/>
          </header>

          <div className=' sm:grid grid-cols-[60%_40%] gap-4 content-stretch justify-items-center h-screen items-center'>
                <div className='flex flex-col items-center justify-center pt-40'>
                  <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl sm:text-xl dark:text-white ">
                    Welcome Ramesh!
                  </h1>

                  <p className="mb-6 text:sm sm:text-lg font-normal text-center text-gray-500 lg:text-xl px-16 xl:px-48 dark:text-gray-400">Hello there! Ready to simplify your application process? Dive into our user-friendly system to track your submissions hassle-free.</p>

                  <div className='h-[150px] sm:h-[300px] flex flex-row gap-10 pt-10'>
                    
                    <DialogForm/>

                    <Button variant={'secondary'} className='border-solid border-[1px] border-sky-300' >
                      <Link href="status"> Track Application</Link>       
                    </Button>
                    
                  </div>
                </div>



                <div className='flex flex-col items-center justify-center mb-10'>
                <Image
                    src="/clipboard.png"
                    width={200}
                    height={200}
                    alt=''
                  />
                </div>
          </div>


          

        
      </SignedIn>










      <SignedOut>
        <div className=' flex flex-col w-full h-screen m-auto items-center justify-center'>
            
<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Application Management System</h1>
<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">We implemented this AMS using latest technologies such as NextJS, Clerk Auth, Tailwind.</p>

    {/* <div className="inline-flex items-center justify-center ">
          <SignInButton />
          <ChevronRight className="h-4 w-4" />   
    </div> */}


    <Button asChild variant='secondary' size="llg" className='m-6 p-4 text-xl w-32 border-solid border-[1px] border-sky-300'>
      <SignInButton />
    </Button>

        </div>
      </SignedOut>
    </div>
  )
}

export default page