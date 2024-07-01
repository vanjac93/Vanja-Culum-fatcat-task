import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Landing } from './components/landing/Landing';
import './styles.css';
import { List } from './components/list/List';

const client = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={client}>
            <main>
                <List />
                {/* <Landing /> */}
            </main>
        </QueryClientProvider>
    );
}

export default App;
