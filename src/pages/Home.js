import { CocktailList } from '../components/CocktailList';
import { SearchForm } from '../components/SearchForm';

export const Home = () => {
    return (
        <main>
            <SearchForm />
            <CocktailList />
        </main>
    )
};