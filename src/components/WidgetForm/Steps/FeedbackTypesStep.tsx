import { FeedbackType, feedbackTypes } from "..";

interface FeedbackTypeStepProps {
  onFeedbackTypeChange: (type: FeedbackType) => void;
}

export function FeedbackTypesStep({onFeedbackTypeChange}: FeedbackTypeStepProps) {
  return (
    <div className="flex py-8 gap-2 w-full">
      {
        Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-cyan-500 focus:border-cyan-500 focus:outline-none"
              onClick={() => {
                onFeedbackTypeChange(key as FeedbackType);
              }}
              type="button"
              key={key}
            >
              <img src={value.image.src} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })
      }
    </div>
  );
}