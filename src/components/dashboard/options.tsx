import { BanknoteArrowUp, BrainCircuit, Upload } from "lucide-react";
import { StartingOptionsType } from "./type";

export const startingOptions: StartingOptionsType[] = [
  {
    children: <BrainCircuit />,
    text: "Start from scratchwith AI",
  },
  {
    children: <BanknoteArrowUp />,
    text: "AI Remix of an Old Presentation",
  },
  {
    children: <Upload />,
    text: "Upload a Document (PDF/DOCX)",
  },
];
