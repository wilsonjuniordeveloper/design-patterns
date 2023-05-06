import { UserRepository } from "./repository";

export class MysqlUsersRepository implements UserRepository {
    findMany(): any[] | null {
        return[
            {
                name: 'João',
                age: 20
            }
        ]
    }
}