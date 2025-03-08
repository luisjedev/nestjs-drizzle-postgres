import { Inject, Injectable } from '@nestjs/common';
import { SayHelloWorldDto } from '@/common/dto/hello-world.dto';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DrizzleAsyncProvider } from './drizzle/drizzle.provider';
import * as schema from './drizzle/schema';

@Injectable()
export class AppService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof schema>,
  ) {}

  sayHello(sayHello: SayHelloWorldDto) {
    return `${sayHello.message}  ${sayHello.name}`;
  }

  async getFirstRole() {
    const existingUserRole = await this.db.query.user_role.findFirst({});
    return existingUserRole;
  }
}
