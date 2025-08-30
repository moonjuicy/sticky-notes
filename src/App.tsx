import { Header } from './components/Header';
import { StickyNotes } from './components/StickyNotes';
import { TrashZone } from './components/TrashZone';

function App() {
    return (
        <div
            className="min-h-screen bg-gray-50"
            style={{
                backgroundImage:
                    'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
                backgroundSize: '20px 20px',
            }}
        >
            <Header />
            <StickyNotes />
            <TrashZone />
        </div>
    );
}

export default App;
