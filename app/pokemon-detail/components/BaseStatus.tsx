import BasicData from './BasicData';

export default function BaseStatus({ data }: { data: any }) {
    return (
      <article className='flex flex-col'>
        <h2 className='text-center font-bold mb-4'>BASE STATUS</h2>
        {data.stats && data.stats.map((status: { name: string; value: number; }) => (
          <BasicData key={status.name} width="half" name={status.name} value={status.value} isItemsCenter />
        ))}
      </article>
    );
};
