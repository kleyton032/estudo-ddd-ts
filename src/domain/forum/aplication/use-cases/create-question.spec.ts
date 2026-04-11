import { AnswerQuestionUseCase } from './answer-question'
import { AnswerRepository } from '@/domain/forum/aplication/repositories/answer-respository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { QuestionRepository } from '../repositories/questions-repository';
import { Question } from '../../enterprise/entities/question';
import { CreateQuestionUseCase } from './create-question';

const fakeQuestionRepository: QuestionRepository = {
    create: async (question: Question) => {
        return;
    }
}

test('create a question', async () => {
    const createQuestion = new CreateQuestionUseCase(fakeQuestionRepository)

    const   question = await createQuestion.execute({
        authorId: '1',
        title: 'Nova pergunta',
        content: 'Conteúdo da pergunta',
    })

    expect(question.content).toEqual('Conteúdo da pergunta')
})  