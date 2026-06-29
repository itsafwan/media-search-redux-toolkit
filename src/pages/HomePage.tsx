import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import SearchBar from '../components/SearchBar';
import Tabs from '../components/Tabs';
import ResultGrid from '../components/ResultGrid';

const HomePage = () => {
    
    const { query } = useSelector((state: RootState) => state.search);

    return (
        <div>
            <SearchBar />

           
            {query !== '' ? (
                <div>
                    <Tabs />
                    <ResultGrid />
                </div>
            ) : null}
        </div>
    );
};

export default HomePage;