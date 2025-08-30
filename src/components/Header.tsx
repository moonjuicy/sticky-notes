import { AddNoteButton } from './AddNote';

export const Header = () => {
    return (
        <header className="flex justify-between items-center p-10">
            <h1 className="text-4xl font-semibold">Notes</h1>
            <AddNoteButton />
        </header>
    );
};
