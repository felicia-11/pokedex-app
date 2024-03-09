import { useRouter } from 'next/navigation';
import { MdArrowBack } from 'react-icons/md';

export default function BackFAB() {
    const router = useRouter();

    return (
        <button
            className='floating-btn cursor-pointer hover:scale-110'
            onClick={() => router.back()}
        >
            <MdArrowBack size={30} className='mx-auto align-middle h-full text-rose-700' />
        </button>
    );
};
