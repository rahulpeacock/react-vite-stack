import { err, ok, type Result, ResultAsync } from 'neverthrow';
import type { LoginResposne, PublicRouteFetchError } from './types';

export const auth = {
  login: async (ctx: { body: { email: string; password: string } }): Promise<Result<LoginResposne, PublicRouteFetchError>> => {
    const res = await ResultAsync.fromPromise(
      fetch(`${import.meta.env.VITE_SERVER_V1_URL}/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ctx.body),
        credentials: 'include',
      }),
      () => new Error('Failed to fetch!'),
    );

    if (res.isErr()) {
      return err({ type: 'FAILED_TO_FETCH' });
    }

    if (res.value.status === 201) {
      return ok(await res.value.json());
    }

    if (res.value.status >= 400 && res.value.status <= 499) {
      const data = (await res.value.json()) as { message: string };
      return err({
        type: 'CLIENT_ERROR',
        error: 'message' in data ? data.message : 'Failed to login!',
      });
    }

    if (res.value.status === 500) {
      return err({ type: 'INTERNAL_SERVER_ERROR' });
    }

    return err({ type: 'UNKNOWN_ERROR' });
  },
};
