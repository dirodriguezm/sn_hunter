import { Result } from '@/Shared';
import { User } from './user.types';

export interface IUserRepository {
    login(): Result<User, Error>
    logout(): Result<User, Error>
}
