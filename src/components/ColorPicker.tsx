import { NOTE_COLORS, type NoteColor } from '../constants/colors';

interface ColorPickerProps {
    isOpen: boolean;
    onColorSelect: (color: NoteColor) => void;
}

export const ColorPicker = ({ isOpen, onColorSelect }: ColorPickerProps) => {
    if (!isOpen) return null;

    return (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 flex flex-col gap-2 pt-2">
            {NOTE_COLORS.map((color) => (
                <div
                    key={color.background}
                    onClick={() => onColorSelect(color)}
                    className="w-4 h-4 rounded-full cursor-pointer shadow-lg transition-all duration-200 ease-out hover:scale-125 mt-2"
                    style={{
                        backgroundColor: color.background,
                    }}
                />
            ))}
        </div>
    );
};
