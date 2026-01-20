

interface Response<T> {
    code: 0 | 500
    data: T
    message: string
}