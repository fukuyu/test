//Prisma Studio起動後、http://localhost:5556/にアクセスするとデータベースをGUIで操作できます。
//npx prisma studio データベースをGUIで操作
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

 import { GraphQLModule } from '@nestjs/graphql';
 import { join } from 'path';

 import { PrismaService } from './prisma.service';
 import { ApolloDriver } from '@nestjs/apollo';
import { AuthModule } from './auth/auth.module';

//デコレーター(関数になっている)
@Module({
  //imports: [UsersModule],
  imports: [UsersModule,
     GraphQLModule.forRoot({
       driver: ApolloDriver,
       autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
     }),
     AuthModule,
   ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
