import { useNoteStore } from '../store/noteStore';
import { StickyNote } from './StickyNote';

export const StickyNotes = () => {
    const notes = useNoteStore((state) => state.notes);

    return (
        <div className="w-full" style={{ height: 'calc(100vh - 120px)' }}>
            {notes.map((note) => (
                <StickyNote key={note.id} id={note.id} />
            ))}
        </div>
    );
};
