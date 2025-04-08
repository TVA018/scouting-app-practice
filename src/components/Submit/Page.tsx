import NavigationBar from "../NavigationBar.tsx";

const Page = () => {
  return (
    <>
      <div className='flex flex-col h-full w-full gap-10 text-white items-center text-4xl'>
        <h1 className="text-4xl text-center text-white my-4">
          Submission
        </h1>
      </div>
      <NavigationBar />
    </>
  )
}

export default Page;