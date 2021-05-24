export type Result<T, E> = Ok<T, E> | Err<T, E>

export type AsyncResult<T, E> = Promise<Result<T, E>>

export const ok = <T, E>(value: T): Ok<T, E> => new Ok(value)

export const err = <T, E>(err: E): Err<T, E> => new Err(err)

export const combine = <T, E>(resultList: Result<T, E>[]): Result<T[], E> => {
	return resultList.reduce(
		(acc, result) =>
			acc.isOk()
				? result.isErr()
					? err(result.error)
					: acc.map((values) => values.concat(result.value))
				: acc,
		ok([]) as Result<T[], E>
	)
}

class Ok<T, E> {
	constructor(readonly value: T) {}

	isOk(): this is Ok<T, E> {
		return true
	}

	isErr(): this is Err<T, E> {
		return false
	}

	map<A>(f: (t: T) => A): Result<A, E> {
		return ok(f(this.value))
	}

	mapErr<U>(_f: (e: E) => U): Result<T, U> {
		return ok(this.value)
	}

	fold<A>(ok: (t: T) => A, _err: (e: E) => A): A {
		return ok(this.value)
	}
}

class Err<T, E> {
	constructor(readonly error: E) { }

	isOk(): this is Ok<T, E> {
		return false
	}

	isErr(): this is Err<T, E> {
		return true
	}

	map<A>(_f: (t: T) => A): Result<A, E> {
		return err(this.error)
	}

	mapErr<U>(f: (e: E) => U): Result<T, U> {
		return err(f(this.error))
	}

	fold<A>(_ok: (t: T) => A, err: (e: E) => A): A {
		return err(this.error)
	}
}
