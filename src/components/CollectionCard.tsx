import { useDispatch } from 'react-redux';
import { removeCollection, removeToast, type CollectionItem } from '../redux/features/collectionSlice';



interface CollectionCardProps {
    item: CollectionItem;
}


const CollectionCard = ({ item }: CollectionCardProps) => {

    const dispatch = useDispatch();

    const removeFromCollection = (currentItem: CollectionItem) => {
        dispatch(removeCollection(currentItem.id));
        dispatch(removeToast());
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
                    onClick={() => removeFromCollection(item)}
                    className='bg-indigo-600 active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium'
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CollectionCard;