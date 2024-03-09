import Divider from '@/app/components/Divider';

export default function Abilities({ data }: { data: any }) {
    return (
      <section className='w-full mx-auto flex flex-col p-4 border-solid border-2 border-rose-700 rounded-md'>
        <h1 className='text-lg font-bold'>ABILITIES</h1>
        <Divider />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {data.abilities && data.abilities.map((ability: string, idx: number) => (
            <div key={`${ability}_${idx}`} className="flex items-center p-4 border-solid border-2 border-rose-700 rounded-full">
              {ability}
            </div>
          ))}
        </div>
      </section>
    );
};
