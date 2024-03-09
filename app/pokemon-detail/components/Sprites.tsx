import Image from 'next/image';
import Divider from '@/app/components/Divider';

export default function Sprites({ data }: { data: any }) {
    return (
      <section className='w-full mx-auto flex flex-col p-4 border-solid border-2 border-rose-700 rounded-md'>
        <h1 className='text-lg font-bold'>SPRITES</h1>
        <Divider />
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2">
          {data.sprites && data.sprites.map((sprite: { name: string; value: string; }) => (
            <div key={`${sprite.name}_${sprite.value}`} className='mx-auto text-center'>
              <Image
                src={sprite.value}
                alt={sprite.name}
                width={150}
                height={150}
                className='border-2 border-solid border-rose-700 rounded mb-1'
              />
              <p>{sprite.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
};
