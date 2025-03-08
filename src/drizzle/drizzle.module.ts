import { Module } from '@nestjs/common';
import { drizzleProvider } from './drizzle.provider';

export const DrizzleAsyncProvider = 'DrizzleAsyncProvider';

@Module({
  providers: [...drizzleProvider],
  exports: [DrizzleAsyncProvider],
})
export class DrizzleModule {}
