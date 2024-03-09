import BasicData from './BasicData';

export default function Profile({ data }: { data: any }) {
    return (
        <article className='flex flex-col'>
          <h2 className='text-center font-bold mb-4'>PROFILE</h2>
          <BasicData width="one-third" name="Weight" value={data.weight} isItemsCenter />
          <BasicData width="one-third" name="Height" value={data.height} isItemsCenter />
          <BasicData width="one-third" name="Base EXP" value={data.baseExp} isItemsCenter />
          <div className='flex gap-1'>
            <p className='w-1/3'>Types</p>
            <div className='w-2/3 flex gap-1.5'>
              <p>:</p>
              <ul>
                {data.types && data.types.map((type: string) => (
                  <li key={type}>{type}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
    );
};
