import { AnswerQuestionUseCase } from './answer-question'
import { AnswerRepository } from '@/domain/forum/aplication/repositories/answer-respository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { InMemoryAnswerRepository } from 'tests/repositories/in-memory-answers-repository'

let inMemoryAnswerRepository: InMemoryAnswerRepository
let sut: AnswerQuestionUseCase

describe('Create Answer', () => {

    beforeEach(() => {

        inMemoryAnswerRepository = new InMemoryAnswerRepository()
        sut = new AnswerQuestionUseCase(inMemoryAnswerRepository)
    })

    it('should create an answer', async () => {

        const {answer}  = await sut.execute({
            instructorId: '1',
            questionId: '1',
            content: 'Conteúdo da resposta',
        })

        expect(answer.content).toEqual('Conteúdo da resposta')
        expect(inMemoryAnswerRepository.items[0].id).toEqual(answer.id)
    })
})