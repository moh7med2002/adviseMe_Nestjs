import { Sequelize } from 'sequelize-typescript';
import { CategoryQuestion } from 'src/CategoryQuestions/CategoryQuestions.entity';
import { Admin } from 'src/admin/admin.entity';
import { Answer } from 'src/answers/answer.entity';
import { Category } from 'src/category/category.entity';
import { CategoryTranslation } from 'src/category/categoryTranslation.entity';
import { QuestionLike } from 'src/like/like.entity';
import { Question } from 'src/question/question.entity';
import { QuestionImage } from 'src/questionImage/questionImage.entity';
import { QuestionVoice } from 'src/questionVoice/questionVoice.entity';
import { QuestionSaved } from 'src/saved/saved.entity';
import { User } from 'src/user/user.entity';
import { UserName } from 'src/user/username.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '059283805928388',
        database: 'advise',
      });
      sequelize.addModels([
        Admin , User , UserName , Category , CategoryTranslation , Question , QuestionVoice , QuestionImage,
        QuestionLike , QuestionSaved , Answer , CategoryQuestion
      ]);
      await sequelize.sync({alter:true});
      return sequelize;
    },
  },
];