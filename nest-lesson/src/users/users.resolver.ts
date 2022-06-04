//prisma-nestjs-graphqlで生成されたObject TypeやArgsを使ってUserの参照・登録の処理を追加します。
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as bcrypt from 'bcrypt';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model'
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { UsersService } from 'src/users/users.service';
import { FindFirstUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-first-user.args';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UpdateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/update-one-user.args';
import { DeleteOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/delete-one-user.args';
import { FindAllUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-all-user.args';
import { FindManyUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-many-user.args';
@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly userService: UsersService) {}

    @Query(() => User)
        @UseGuards(JwtAuthGuard)
    user(
        @Args() args: FindFirstUserArgs
    ) {
        return this.userService.findFirst(args)
    }

    @Mutation(() => User)
    async createUser(
        @Args() args: CreateOneUserArgs
    ) {
        args.data.password = await bcrypt.hash(args.data.password, 10);
        return this.userService.createUser(args);
    }
    
    @Mutation(() => User)
    async update(
        @Args() args: UpdateOneUserArgs
    ) {
        return this.userService.update(args);
    }

    // @Mutation(() => User)
    // async FindAll(
    //     @Args() args: FindAllUserArgs
    // ) {
    //     return this.userService.FindAll(args);
    // }

    @Mutation(() => [User])
    async findMany(
        @Args() args: FindManyUserArgs
    ) {
        return this.userService.findMany(args);
    }

    @Mutation(() => User)
    async delete(
        @Args() args: DeleteOneUserArgs
    ) {
        return this.userService.delete(args);
    }
}