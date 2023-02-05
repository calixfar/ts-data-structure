export class CustomError extends Error {
  constructor (customMessage: string = 'Error inesperado') {
    super(customMessage)
  }
}