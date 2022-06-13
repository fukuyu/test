import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    /**
     * @Validator.@IsNotEmpty()
     */
    @Field(() => String, {nullable:false,description:'@Validator.@IsNotEmpty()'})
    title!: string;

    @Field(() => Date, {nullable:false})
    date!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    done!: boolean;

    @HideField()
    password!: string;

    @HideField()
    createdAt!: Date;

    @HideField()
    updatedAt!: Date;
}
