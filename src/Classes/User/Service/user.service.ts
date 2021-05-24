import { IUserRepository, User } from '../Entity';
import { Result, HttpService, ok } from '@/Shared';
import { IUserLoginResponse } from './user.parser';

export class UserService implements IUserRepository {
    httpService: HttpService
    constructor(httpService: HttpService) {
        this.httpService = httpService
    }
    async login(): Result<User, Error> {
        const parseTo = (apiResponse: IUserLoginResponse) => {
            return ok(apiResponse)
        }

        const loginUser = await this.httpService.get<IUserLoginResponse, IUserLoginResponse>(
            {
                url: "",
                config: {
                    headers: { 'content-type': 'application/x-www-form-urlencoded' }
                }
            },
            { parseTo }
        )

    }
    logout(): Result<User, Error> {
        throw new Error("Method not implemented.")
    }

}
