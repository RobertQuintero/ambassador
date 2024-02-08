import { atom } from "jotai";

export const inputAtom = atom<string>("");
export const categoryAtom = atom<string[]>([]);
export const techStackAtom = atom<string[]>([]);
export const tagAtom = atom<string[]>([]);

export const showMoreCountAtom = atom(7);