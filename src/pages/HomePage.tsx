import { useSelector } from 'react-redux';
// import ResultGrid from '../components/ResultGrid';
// import SearchBar from '../components/SearchBar';
// import Tabs from '../components/Tabs';
import type { RootState } from '../redux/store';

const HomePage = () => {
    // 2. State ka type define karo
    const { query } = useSelector((state: RootState) => state.search);

    return (
        <div>
            {/* <SearchBar /> */}

           
            {query !== '' ? (
                <div>
                    {/* <Tabs />
                    <ResultGrid /> */}
                </div>
            ) : null}
        </div>
    );
};

export default HomePage;