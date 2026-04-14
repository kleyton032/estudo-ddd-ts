import { QuestionRepository } from '../repositories/questions-repository';
import { Question } from '../../enterprise/entities/question';
import { CreateQuestionUseCase } from './create-question';
import { InMemoryQuestionsRepository } from 'tests/repositories/in-memory-quetions-repository';


let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: CreateQuestionUseCase

describe('CreateQuestionUseCase', () => {

    beforeEach(() => {

        inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
        sut = new CreateQuestionUseCase(inMemoryQuestionsRepository)
    })

    it('should create a question', async () => {

        const { question } = await sut.execute({
            authorId: '1',
            title: 'Nova pergunta',
            content: 'Conteúdo da pergunta',
        })

        expect(question.content).toEqual('Conteúdo da pergunta')
        expect(inMemoryQuestionsRepository.items[0].id).toEqual(question.id)
    })
})