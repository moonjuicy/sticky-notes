export const NOTE_COLORS = [
    { main: '#A77D32', background: '#FFDE9E' },
    { main: '#FF4F18', background: '#FFC9AA' },
    { main: '#D01B11', background: '#FFC2C3' },
    { main: '#4145B0', background: '#AEC9FF' },
    { main: '#1BA04D', background: '#BEFFC3' },
    { main: '#3572B8', background: '#A0EDFC' },
] as const;

export type NoteColor = (typeof NOTE_COLORS)[number];
