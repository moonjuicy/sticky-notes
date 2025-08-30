import type { NoteColor } from '../constants/colors';

export interface Note {
    readonly id: string;
    index: number;
    x: number;
    y: number;
    width: number;
    height: number;
    color: NoteColor;
    title?: string;
    text: string;
    zIndex: number;
    readonly createdAt: Date;
    updatedAt: Date;
}

export interface NotePosition {
    x: number;
    y: number;
}

export interface NoteDimensions {
    width: number;
    height: number;
}

export interface CreateNotePayload {
    x: number;
    y: number;
    width: number;
    height: number;
    color: NoteColor;
    title?: string;
    text?: string;
    index?: number;
}
