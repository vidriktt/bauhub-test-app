import FileList from './FileList';
import FeatherIcon from 'feather-icons-react';

function App() {
    return (
        <div className="container max-w-5xl mx-auto mt-12">
            <nav className="flex mb-1 p-2">
                <ol className="inline-flex items-center space-x-1">
                    <li className="inline-flex items-center">
                        <a href="/#" className="inline-flex items-center text-sm font-medium opacity-80 hover:opacity-60">
                            Dokumendid
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <FeatherIcon icon="chevron-right" size="16" />
                            <a href="/#" className="ml-1 text-sm font-bold hover:opacity-80">Hankedokumendid</a>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="mb-3">
                <button className="m-2.5 curson-pointer enabled:hover:opacity-80" disabled>
                    <FeatherIcon icon="trash" size="18" />
                </button>
            </div>
            <FileList />
        </div>
    );
}

export default App;
