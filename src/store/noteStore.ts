import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type { Note, CreateNotePayload } from '../types/noteTypes';

interface NoteStore {
    readonly notes: Note[];
    addNote: (payload: CreateNotePayload) => void;
    updateNote: (
        id: string,
        updates: Partial<
            Pick<
                Note,
                | 'x'
                | 'y'
                | 'width'
                | 'height'
                | 'text'
                | 'title'
                | 'color'
                | 'zIndex'
            >
        >
    ) => void;
    deleteNote: (id: string) => void;
    getNoteById: (id: string) => Note | undefined;
    bringToFront: (id: string) => void;
}

const createNote = (
    payload: CreateNotePayload & { zIndex?: number }
): Note => ({
    id: crypto.randomUUID(),
    index: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    text: '',
    zIndex: 1,
    ...payload,
});

export const useNoteStore = create<NoteStore>()(
    devtools(
        persist(
            (set, get) => ({
                notes: [],

                addNote: (payload) => {
                    const maxZ = Math.max(
                        0,
                        ...get().notes.map((n) => n.zIndex ?? 1)
                    );
                    const newNote = createNote({
                        ...payload,
                        index: get().notes.length,
                        zIndex: maxZ + 1,
                    });
                    set(
                        (state) => ({
                            notes: [...state.notes, newNote],
                        }),
                        false,
                        'addNote'
                    );
                },

                updateNote: (id, updates) => {
                    set(
                        (state) => ({
                            notes: state.notes.map((note) =>
                                note.id === id
                                    ? {
                                          ...note,
                                          ...updates,
                                          updatedAt: new Date(),
                                      }
                                    : note
                            ),
                        }),
                        false,
                        'updateNote'
                    );
                },

                deleteNote: (id) => {
                    set(
                        (state) => ({
                            notes: state.notes.filter((note) => note.id !== id),
                        }),
                        false,
                        'deleteNote'
                    );
                },

                getNoteById: (id) => {
                    return get().notes.find((note) => note.id === id);
                },

                bringToFront: (id) => {
                    const maxZ = Math.max(
                        0,
                        ...get().notes.map((n) => n.zIndex ?? 1)
                    );
                    set(
                        (state) => ({
                            notes: state.notes.map((note) =>
                                note.id === id
                                    ? { ...note, zIndex: maxZ + 1 }
                                    : note
                            ),
                        }),
                        false,
                        'bringToFront'
                    );
                },
            }),
            {
                name: 'note-storage',
            }
        )
    )
);
