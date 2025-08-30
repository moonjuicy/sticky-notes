import { useState } from 'react';
import { ColorPicker } from './ColorPicker';
import type { NoteColor } from '../constants/colors';
import { useNoteStore } from '../store/noteStore';

export const AddNoteButton = () => {
    const [showColorPicker, setShowColorPicker] = useState(false);
    const addNote = useNoteStore((state) => state.addNote);

    const handleAddNote = () => {
        setShowColorPicker(!showColorPicker);
    };

    const handleColorSelect = (color: NoteColor) => {
        const randomX = Math.random() * (window.innerWidth - 400);
        const randomY = Math.random() * (window.innerHeight - 300);

        addNote({
            x: randomX,
            y: randomY,
            width: 300,
            height: 200,
            color: color as NoteColor,
            text: '',
        });

        setShowColorPicker(false);
    };

    return (
        <div className="relative">
            <button
                onClick={handleAddNote}
                className="w-10 h-10 font-light bg-black text-white rounded-full flex items-center justify-center text-3xl transition-colors cursor-pointer"
            >
                +
            </button>

            <ColorPicker
                isOpen={showColorPicker}
                onColorSelect={handleColorSelect}
            />
        </div>
    );
};
