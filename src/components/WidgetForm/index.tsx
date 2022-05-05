import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../assets/bug.svg"; 
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypesStep } from "./Steps/FeedbackTypesStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      src: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: { 
    title: "Ideia",
    image: {
      src: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    } 
  },
  OTHER: { 
    title: "Outro",
    image: {
      src: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    }   
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {
          !feedbackType ? (
            <FeedbackTypesStep onFeedbackTypeChange={setFeedbackType} />
          ) : (
            <p>Hello</p>
          )
        }
      </div>
      <p>Hello World</p>
      <footer className="text-xs text-neutral-400 flex justify-center">
        Feito com ♥ por&nbsp;
        <a
          className="underline underline-offset-2"
          target="_blank"
          href="https://www.github.com/thalitagq"
        >
          Thalita
        </a>
      </footer>
    </div>
  );
}
