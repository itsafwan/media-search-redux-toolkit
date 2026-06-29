import { useState, type ChangeEvent,} from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/searchSlice';

const SearchBar = () => {
    
    const [text, setText] = useState<string>('');

    const dispatch = useDispatch();

   
    const submitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setQuery(text));
        setText('');
    };

    
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <div>
            <form onSubmit={submitHandler} className='flex bg-(--c1) gap-5 py-10 px-10'>
                <input
                    value={text}
                    onChange={changeHandler}
                    required
                    className='w-full border-2 px-6 py-3 text-xl rounded outline-none'
                    type="text"
                    placeholder='Search anything...' 
                />

                <button 
                    type="submit"
                    className='active:scale-95 cursor-pointer border-2 px-6 py-3 text-xl rounded outline-none'
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;