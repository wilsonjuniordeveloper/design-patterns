import { MysqlUsersRepository } from "./mysql-repository";
import { UserRepository } from "./repository";

export class ChacheRepository implements UserRepository {

    private cache: any[] = []
    private mysqlRepository = new MysqlUsersRepository()

    findMany(): any[] | null {
        if(this.cache.length == 0 ) {
            const users = this.mysqlRepository.findMany()
            this.create(users)
            console.log("FROM MYSQL")
            
            return users;
        }

        console.log("FROM CACHE")
        return this.cache
    }

    create(data: any) {
        this.cache.push(data)
    }


}