export default function BasicData({ width, name, value, isItemsCenter }: {
    width: string,
    name: string,
    value: string | number,
    isItemsCenter: undefined | boolean,
}) {
    return (
        <div className={`flex gap-1 ${isItemsCenter ? 'items-center' : ''}`}>
          <p className={width === 'half' ? 'w-1/2' : 'w-1/3'}>{name}</p>
          <p className={width === 'half' ? 'w-1/2' : 'w-2/3'}>{`: ${value}`}</p>
        </div>
    );
};
