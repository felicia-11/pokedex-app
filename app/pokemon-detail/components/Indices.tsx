import Link from 'next/link';
import Divider from '@/app/components/Divider';

export default function GameIndices({ data }: { data: any }) {
    return (
      <section className='w-full mx-auto flex flex-col p-4 border-solid border-2 border-rose-700 rounded-md'>
        <h1 className='text-lg font-bold'>GAME INDICES</h1>
        <Divider />
        <ul className='list-disc px-6'>
          {data.indices && data.indices.map((name: string) => (
            <li key={name}>
              <Link href={`https://google.com/search?q=Pokemon+${name}`} target='_blank' className='hover:text-rose-700'>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
};
