import { User } from '../Entity';
import { ParseError, Result, ok } from '@/Shared';

export type IUserLoginResponse = {
    id: number
    token: string
    username: string
    first_name: string
    last_name: string
    email: string
}

export class UserParser {
    toDomain(data: IUserLoginResponse): Result<User, ParseError> {
        const user: User = {
            id: data.id,
            firstName: data.first_name,
            lastName: data.last_name,
            username: data.username,
            email: data.email
        }
        return ok(user)
    }
}
