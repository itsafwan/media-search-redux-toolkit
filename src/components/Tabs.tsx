import { useDispatch, useSelector } from 'react-redux';
import { setActiveTabs, type ActiveTab } from '../redux/features/searchSlice';
import type { RootState } from '../redux/store';

const Tabs = () => {
    const tabs: ActiveTab[] = ['photos', 'videos', 'gifs'];

    const dispatch = useDispatch();

    const activeTab = useSelector((state: RootState) => state.search.activeTab);

    return (
        <div className='flex gap-5 p-10'>
            {tabs.map((elem) => {
                return (
                    <button
                        className={`${
                            activeTab === elem ? 'bg-blue-700' : 'bg-gray-500'
                        } transition cursor-pointer active:scale-95 px-5 py-2 rounded uppercase`}
                        key={elem}
                        onClick={() => {
                            dispatch(setActiveTabs(elem));
                        }}
                    >
                        {elem}
                    </button>
                );
            })}
        </div>
    );
};

export default Tabs;