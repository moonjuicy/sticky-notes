import { useRef } from 'react';
import { Rnd } from 'react-rnd';
import { useNoteStore } from '../store/noteStore';
import { FaXmark } from 'react-icons/fa6';

interface StickyNoteProps {
    id: string;
}

export const StickyNote = ({ id }: StickyNoteProps) => {
    const nodeRef = useRef<HTMLDivElement>(null);
    const note = useNoteStore((state) => state.notes.find((n) => n.id === id));
    const updateNote = useNoteStore((state) => state.updateNote);
    const deleteNote = useNoteStore((state) => state.deleteNote);
    const bringToFront = useNoteStore((state) => state.bringToFront);

    if (!note) return null;

    return (
        <Rnd
            nodeRef={nodeRef}
            style={{ zIndex: note.zIndex ?? 1 }}
            size={{ width: note.width, height: note.height }}
            position={{ x: note.x, y: note.y }}
            bounds="parent"
            minWidth={150}
            minHeight={100}
            onMouseDown={() => bringToFront(id)}
            onDragStart={() => bringToFront(id)}
            onResizeStart={() => bringToFront(id)}
            onDragStop={(e, d) => {
                updateNote(id, { x: d.x, y: d.y });
                const noteEl = nodeRef.current;
                const trashEl = document.getElementById('trash-zone');
                if (!noteEl || !trashEl) return;
                const noteRect = noteEl.getBoundingClientRect();
                const trashRect = trashEl.getBoundingClientRect();
                const overlaps =
                    noteRect.left < trashRect.right &&
                    noteRect.right > trashRect.left &&
                    noteRect.top < trashRect.bottom &&
                    noteRect.bottom > trashRect.top;
                if (overlaps) deleteNote(id);
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
                updateNote(id, {
                    width: parseInt(ref.style.width),
                    height: parseInt(ref.style.height),
                    x: position.x,
                    y: position.y,
                });
                const noteEl = nodeRef.current;
                const trashEl = document.getElementById('trash-zone');
                if (!noteEl || !trashEl) return;
                const noteRect = noteEl.getBoundingClientRect();
                const trashRect = trashEl.getBoundingClientRect();
                const overlaps =
                    noteRect.left < trashRect.right &&
                    noteRect.right > trashRect.left &&
                    noteRect.top < trashRect.bottom &&
                    noteRect.bottom > trashRect.top;
                if (overlaps) deleteNote(id);
            }}
        >
            <div
                ref={nodeRef}
                className="w-full h-full rounded-lg p-3 cursor-move shadow-lg flex flex-col"
                style={{
                    backgroundColor: note.color.background as string,
                    color: note.color.main as string,
                }}
            >
                <div className="flex justify-between items-center">
                    <input
                        type="text"
                        value={note.title}
                        onChange={(e) =>
                            updateNote(id, { title: e.target.value })
                        }
                        className="w-full bg-transparent border-none outline-none font-bold text-lg"
                        placeholder={`Note ${note.index + 1}`}
                    />
                    <div>
                        <button
                            className="text-xl cursor-pointer"
                            onClick={() => deleteNote(id)}
                        >
                            <FaXmark />
                        </button>
                    </div>
                </div>
                <textarea
                    value={note.text}
                    onChange={(e) => updateNote(id, { text: e.target.value })}
                    className="flex-1 bg-transparent resize-none outline-none"
                    placeholder="Type your note..."
                />
            </div>
        </Rnd>
    );
};
