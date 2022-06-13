import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model'
import { FindFirstUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-first-user.args';
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { FindUniqueUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-unique-user.args';
import { DeleteOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/delete-one-user.args';
import { UpdateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/update-one-user.args';
import { FindManyUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-many-user.args';


@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async findFirst(args: FindFirstUserArgs): Promise<User | null> {
        return this.prisma.user.findFirst(args);
    }

    async findUnique(args: FindUniqueUserArgs): Promise<User | null> {
        return this.prisma.user.findUnique(args);
    }

    async delete(args: DeleteOneUserArgs): Promise<User> {
        return this.prisma.user.delete(args);
    }

    async update(args: UpdateOneUserArgs): Promise<User> {
        return this.prisma.user.update(args);
    }

    async createUser(args: CreateOneUserArgs): Promise<User> {
        return this.prisma.user.create(args);
    }

    async findMany(args: FindManyUserArgs): Promise<User[]> {
        return this.prisma.user.findMany(args);
    }
}