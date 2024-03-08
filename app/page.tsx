import {
  MdLastPage,
  MdFirstPage,
  MdNavigateNext,
  MdNavigateBefore,
  MdOutlineArrowCircleRight,
} from 'react-icons/md';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <article className="w-9/12 mx-auto flex flex-col gap-6">
        <section>
          <h1 className="text-center text-xl font-bold lg:text-left">Pokemon List</h1>
        </section>
        <section className="grid lg:grid-cols-2 gap-2">
          <div className="flex justify-between items-center p-4 border-solid border-4 border-rose-700 rounded-full cursor-pointer hover:backdrop-brightness-95 hover:shadow-md">
            <p>Abra</p>
            <MdOutlineArrowCircleRight className='text-2xl' />
          </div>
          <div className="flex justify-between items-center p-4 border-solid border-4 border-rose-700 rounded-full cursor-pointer hover:backdrop-brightness-95 hover:shadow-md">
            <p>Kadabra</p>
            <MdOutlineArrowCircleRight className='text-2xl' />
          </div>
          <div className="flex justify-between items-center p-4 border-solid border-4 border-rose-700 rounded-full cursor-pointer hover:backdrop-brightness-95 hover:shadow-md">
            <p>Alakazam</p>
            <MdOutlineArrowCircleRight className='text-2xl' />
          </div>
          <div className="flex justify-between items-center p-4 border-solid border-4 border-rose-700 rounded-full cursor-pointer hover:backdrop-brightness-95 hover:shadow-md">
            <p>Ratata</p>
            <MdOutlineArrowCircleRight className='text-2xl' />
          </div>
        </section>
        <section className="w-fit mx-auto flex justify-between items-center gap-2">
          <MdFirstPage className='text-3xl cursor-pointer hover:text-rose-700' />
          <MdNavigateBefore className='text-3xl cursor-pointer hover:text-rose-700' />
          <div>1-4 of 4</div>
          <MdNavigateNext className='text-3xl cursor-pointer hover:text-rose-700' />
          <MdLastPage className='text-3xl cursor-pointer hover:text-rose-700' />
        </section>
      </article>
    </main>
  );
};
