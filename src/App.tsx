import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './styles.css';
import { Landing } from './components/landing/Landing';

const client = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={client}>
            <main>
                <Landing />
            </main>
        </QueryClientProvider>
    );
}

export default App;
