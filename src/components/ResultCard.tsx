import { useDispatch } from 'react-redux';
import { addCollection, addedToast } from '../redux/features/collectionSlice';
import type { CollectionItem } from '../redux/features/collectionSlice';


interface ResultCardProps {
    item: CollectionItem;
}

const ResultCard = ({ item }: ResultCardProps) => {

    const dispatch = useDispatch();

    const addToCollection = (itemData: CollectionItem) => {
        dispatch(addCollection(itemData));
        dispatch(addedToast());
    };

    return (
        <div className='w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden'>
            <a target='_blank' rel="noreferrer" className='h-full' href={item.url as string}>
                {item.type === 'photo' && <img className='h-full w-full object-cover object-center' src={item.src as string} alt="" />}
                {item.type === 'video' && <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src as string}></video>}
                {item.type === 'gif' && <img className='h-full w-full object-cover object-center' src={item.src as string} alt="" />}
            </a>
            
            <div id='bottom' className='flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white'>
                <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{item.title as string}</h2>
                <button
                    onClick={() => addToCollection(item)}
                    className='bg-indigo-600 active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium'
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default ResultCard;