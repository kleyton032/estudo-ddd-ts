import { UniqueEntityID } from "../../core/entities/unique-entity-id"
import { Answer } from "../entities/answer"
import { AnswerRepository } from "../repositories/answer-respository"

interface AnswerQuestionUseCaseRequest {
    instructorId: UniqueEntityID
    questionId: UniqueEntityID
    content: string,
    createdAt: Date
    updatedAt?: Date
}


export class AnswerQuestionUseCase {

    constructor(private answerRepository: AnswerRepository){}

    async execute({ instructorId, questionId, content, createdAt }: AnswerQuestionUseCaseRequest) {
        const answer = new Answer({
            content,
            authorId: instructorId,
            questionId,
            createdAt
        })

        await this.answerRepository.create(answer)

        return answer
    }


}