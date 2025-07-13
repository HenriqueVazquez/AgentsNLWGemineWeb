import { useRoomsQuestions } from "@/http/use-rooms-questions";
import { QuestionItem } from "./question-item";

interface QuestionListprops {
  roomid: string
}

export function QuestionsList(props: QuestionListprops) {
  const { data } = useRoomsQuestions(props.roomid);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl text-foreground">
          Perguntas & Respostas
        </h2>
      </div>

      {data?.map((question) => {
        return (
          <QuestionItem
            key={question.id}
            question={question}
          />

        )
      })}
    </div>
  )
}